import React, { createContext, useContext, useEffect, useState } from "react";

import {
  useAddress,
  useContract,
  useContractWrite,
  useMetamask,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useLocation } from "react-router-dom";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const { contract } = useContract(
    "0xD85c9812DBf306F65e75d7d490164D4C95F80FD2"
  );

  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );

  const address = useAddress();
  const connect = useMetamask();

  const publishCampaign = async (form) => {
    try {
      const data = await createCampaign([
        address, // owner
        form.name, //name
        form.title, // title
        form.description, // description
        form.target,
        new Date(form.deadline).getTime(), // deadline,
        form.image,
      ]);

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getCampaign = async (_id) => {
    const campaign = await contract.call("getCampaign", _id);

    const data = {
      name: campaign.name,
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      id: _id,
      donations: [
        ...campaign.donations.map((don, i) => ({
          donator: campaign.donators[i],
          amount: ethers.utils.formatEther(don.toString()),
        })),
      ],
    };

    return data;
  };

  const getCampaigns = async () => {
    const campaigns = await contract.call("getCampaigns");

    const parsedCampaings = campaigns.map((campaign, i) => ({
      owner: campaign.owner,
      title: campaign.title,
      description: campaign.description,
      target: ethers.utils.formatEther(campaign.target.toString()),
      deadline: campaign.deadline.toNumber(),
      amountCollected: ethers.utils.formatEther(
        campaign.amountCollected.toString()
      ),
      image: campaign.image,
      pId: i,
    }));

    return parsedCampaings;
  };

  const getUserCampaigns = async () => {
    const allCampaigns = await getCampaigns();

    const filteredCampaigns = allCampaigns.filter(
      (campaign) => campaign.owner === address
    );

    return filteredCampaigns;
  };

  const donate = async (pId, amount) => {
    const data = await contract.call("donateToCampaign", pId, {
      value: ethers.utils.parseEther(amount),
    });

    return data;
  };

  const getDonations = async (pId) => {
    const donations = await contract.call("getDonators", pId);
    const numberOfDonations = donations[0].length;

    const parsedDonations = [];

    for (let i = 0; i < numberOfDonations; i++) {
      parsedDonations.push({
        donator: donations[0][i],
        donation: ethers.utils.formatEther(donations[1][i].toString()),
      });
    }

    return parsedDonations;
  };

  return (
    <StateContext.Provider
      value={{
        mobileOpen,
        setMobileOpen,
        address,
        contract,
        connect,
        createCampaign: publishCampaign,
        getCampaign,
        getCampaigns,
        getUserCampaigns,
        donate,
        getDonations,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
