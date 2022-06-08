import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import Web3Modal from "web3modal";
import TextField from "@mui/material/TextField";
import { FileUploader } from "react-drag-drop-files";
import Web3 from "web3/dist/web3.min.js";

function Tab1({
  walletAddress,
  setWalletAddress,
  collectioname,
  setcollectioname,
  symbol,
  setsymbol,
  desc,
  setdesc,
  file,
  setFile,
}) {
  const providerOptions = {
    metmask: {
      package: true,
    },
    binancechainwallet: {
      package: true,
    },
  };
  const [focus1, setfocus1] = useState(false);
  const [focus2, setfocus2] = useState(false);
  const [focus3, setfocus3] = useState(false);
  const web3Modal = new Web3Modal({
    network: "rinkeby",
    // theme: "dark",
    cacheProvider: true,
    providerOptions,
  });
  const connectWallet = async () => {
    const provider = await web3Modal.connect();
    const web3 = new Web3(provider);
    await window.ethereum.send("eth_requestAccounts");
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    setWalletAddress(account);
  };
  React.useEffect(() => {
    if (walletAddress) {
      connectWallet();
    }
  }, []);

  const createCollection = (e) => {
    e.preventDefault();
    console.log("first");
  };
  const fileTypes = ["JPEG", "PNG"];
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div>
      {walletAddress ? (
        <>
          <Typography>Wallet connected. Address : {walletAddress}</Typography>
        </>
      ) : (
        <Button color="success" variant="outlined" onClick={connectWallet}>
          Connect to wallet
        </Button>
      )}
      <br />
      <br />
      <form>
        <FileUploader
          multiple={false}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <br />

        <TextField
          label="Collection Name"
          id="filled-size-normal"
          variant="outlined"
          value={collectioname}
          placeholder="Enter collection name"
          required
          onFocus={() => setfocus1(true)}
          onBlur={() => setfocus1(false)}
          sx={{ width: "100%" }}
          helperText={
            focus1
              ? `Name of your collection. It would be visible in gallery`
              : ""
          }
          onChange={(e) => setcollectioname(e.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Symbol (Short Name)"
          id="filled-size-normal"
          placeholder="3-5 charecter long name"
          variant="outlined"
          sx={{ width: "100%" }}
          value={symbol}
          onFocus={() => setfocus2(true)}
          onBlur={() => setfocus2(false)}
          onChange={(e) => setsymbol(e.target.value)}
          helperText={
            focus2
              ? `The symbol which is attributed to the NFT: for an example, kusuma is labeled as KSM`
              : ""
          }
        />
        <br />
        <br />
        <TextField
          id="standard-multiline-static"
          label="Collection description"
          multiline
          rows={4}
          sx={{ width: "100%" }}
          variant="outlined"
          placeholder="Enter collection description"
          value={desc}
          onFocus={() => setfocus3(true)}
          onBlur={() => setfocus3(false)}
          helperText={
            focus3
              ? `The symbol which is attributed to the NFT: for an example, kusuma is labeled as KSM`
              : ""
          }
          onChange={(e) => setdesc(e.target.value)}
        />
        <br />
        <br />
        {walletAddress && collectioname && desc ? (
          <Button
            type="submit"
            color="error"
            variant="contained"
            onSubmit={(e) => createCollection(e)}
          >
            Create Collection
          </Button>
        ) : (
          <Button
            type="submit"
            color="error"
            variant="contained"
            disabled
            onSubmit={(e) => createCollection(e)}
          >
            Create Collection
          </Button>
        )}
      </form>
    </div>
  );
}

export default Tab1;
