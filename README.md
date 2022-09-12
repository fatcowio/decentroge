<p align="center">
  <a href="https://github.com/king-technologies/Project-Initiator" title="Project Initiator">
    <img src="./src/assets/productify-logo.svg" width="80px" alt="Project Initiator"/>
  </a>
</p>
<h1 align="center">🌟 Decentroge 🌟</h1>
<p align="center">Start your project with Single Command</p>

<p align="center">
<a href="https://github.com/sensurusirupus/decentroge/blob/master/LICENSE" title="License">
<img src="https://img.shields.io/github/license/sensurusirupus/decentroge" alt="Decentroge"/>
</a>
<a href="https://github.com/sensurusirupus/decentroge/fork" title="Forks">
<img src="https://img.shields.io/github/forks/sensurusirupus/decentroge" alt="Decentroge Forks"/>
</a>
<a href="https://github.com/sensurusirupus/decentroge" title="Stars">
<img src="https://img.shields.io/github/stars/sensurusirupus/decentroge" alt="Decentroge Stars"/>
</a>
<a href="https://img.shields.io/github/stars/sensurusirupus/decentroge/issues" title="Issues">
<img src="  https://img.shields.io/github/issues/sensurusirupus/decentroge" alt="Decentroge Issues"/>
</a>





</a>
</p>

<p align="center" title="Project Initiator"><img src="./src/assets/gitdemo.gif" alt="Project Initiator"/></p>

<h2 align="center">🌐 Links 🌐</h2>
<p align="center">
    <a href="https://youtu.be/ud4P45zhCk0" title="">🖥️ Video</a>
    .
    <a href="https://youtu.be/ud4P45zhCk0" title="">🔗 Website</a>
    ·
    <a href="https://github.com/sensurusirupus/decentroge" title="">📂 Repo</a>
    ·
    <a href="https://github.com/sensurusirupus/decentroge" title="🐛Report Bug/🎊Request Feature">🚀 Got Issue</a>
</p>

## 💪 Motivation
Switching between several web3 storage solutions like IPFS and Web3 Storage might be challenging at times. Personally, I use IPFS and web3 storage for my files. Can we create NFTs from files we've already submitted to these platforms? Can we have a user-friendly interface that displays files and groups them into folders? What if you could manage all of your files on a single platform?

That is how decentroge came to be.

## 🚀 How it works

Decentroge is a decentralise storage online Platforms with NFT and Chatting capabilities.Users can choose store their data on IPFS or Web3 Storage. Users can access files directly through web browser without using any third party software.

 It has been implemented in order to reduce the dependency on centralized services like Dropbox and Google Drive where users are dependent on a single point of failure. It will give you complete control over your data, right from its inception.
 Features:
 
- **Storage: You have the freedom to choose whether to store your data on IPFS or Web3 Storage**

- **File manager: Directly browse your files from your dashboard**

- **Sharing: Easily share files with friends and family.**

- **NFT Token: Mint NFTs directly from the files uploaded on decentroge**

- **Chat: Send messages on Decentroge.**



## 🦋 Prerequisite

- [Nodejs](https://nodejs.org/en// "Node") Installed


- [Git](https://git-scm.com/ "Git OFficial") Installed


- [npm](https://www.npmjs.com/ "npm ") Installed

- [Hardhat](https://hardhat.org/ "Hardhat ") Installed

## 🛠️ Installation Steps

1. Clone the repository

```Bash
git clone https://github.com/sensurusirupus/decentroge
```

2. Change the working directory

```Bash
cd Decentroge
```

3. Start the local Hardhat node
```Bash
npx hardhat node
```

4. With the network running, deploy the contracts to the local network in a separate terminal window
```Bash
npx hardhat run scripts/deploy.js --network localhost
```

5. Start the app
```Bash
npm run start
```


**🎇 You are Ready to Go!**

## ⚙️ Configuration

The chain ID should be 80001. If you have a localhost rpc set up, you may need to overwrite it.

<p align="center" title="Project Initiator"><img src="./src/assets/rpc.png" alt="Project Initiator"/></p>

To deploy to Polygon test or main networks, update the configurations located in hardhat.config.js to use a private key and, optionally, deploy to a private RPC like Infura.

```Bash
require('@nomiclabs/hardhat-waffle');
const privateKey = 'xxx';
const projectId = 'xx';

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/{projectId}',
      accounts: [privateKey],
    },
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
```

## 👷 Built with
- [Solidity](https://docs.soliditylang.org/en/v0.8.17/ "Solidity"): as Main Coding Language for writing smart contract

- [ReactJs](https://reactjs.org/ "React Js"): as Main Coding Language for Creating The UI components (Front End)

- [TailwindCss](https://tailwindcss.com/ "Tailwind Css"): as Main Coding Language for styling UI components

- [IPFS](https://ipfs.tech/ "IPFS"): For Storing of files

- [Web3 Storage](https://www.google.com/search?q=web3storage "Web3 Storage"): For Storing of files

- [Moralis](https://moralis.io/ "Moralis"): as Tool for creating the chat section

- [Github](https://github.com/ "Github") : For Repo Storage and source code management

- [Git](https://git-scm.com/ "Git") : For Version Control System



## 📂 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

- Fork the Project

- Create your Feature Branch (git checkout -b feature/AmazingFeature)

- Commit your Changes (git commit -m 'Add some AmazingFeature')

- Push to the Branch (git push origin feature/AmazingFeature)

- Open a Pull Request


## 🎊 Future Updates 

- [ ] We are working on our adding more web3 storage platforms

- [ ] NFTs for all media type (Videos, Audio and PDFs)

- [ ] Working of creating our own decentralize storage system

- [ ] Get tokens as your share files


## 🧑🏻 Author

**Sensurus Irupus**

- 🌌 [Profile](https://github.com/sensurusirupus "Sensurus Irupus")

- 🏮 [Email](sensurusirupus@gmail.com "Hi!")

<h2 align="center">🤝 Support</h2>

<p align="center">🎀 Contributions (<a href="https://guides.github.com/introduction/flow" title="GitHub flow">GitHub Flow</a>), 🔥 issues, and 🥮 feature requests are most welcome!</p>

<p align="center">💙 If you like this project, Give it a ⭐ and Share it with friends!</p>

<p align="center">Made with Solidity and Javascript & ❤️ </p>
