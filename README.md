# Develop Smart Contract for NFT Marketplace

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/your-username/mastering-state-management/blob/main/LICENSE)

Welcome to the repository for the project code of the online project [Develop Smart Contract for NFT Marketplace](https://educat.tv/3HcT7Gu).

This project is built on the Ethereum blockchain that enables users to mint, list, and trade non-fungible tokens (NFTs). The smart contract is written in **Solidity**, utilizing the **ERC721** token standard for unique token identification.

We’ll utilize the **Hardhat** framework to develop the smart contract. By using this technology, we can easily develop, test, and deploy the contracts. We’ll also use **OpenZeppelin**, a widely recognized library of reusable and secure smart contract components in our project.

The key features that this project will contain are as follows:

- **Minting:** Users can create and mint new NFTs by providing a token URI and setting an initial price for the NFT.

- **Listing:** NFTs can be listed for sale at a specified price. A listing fee is required for listing an NFT on the marketplace.

- **Buying:** Users can purchase listed NFTs by sending the required payment, transferring the ownership of the NFT to the buyer, and providing the necessary fees to the contract owner.

- **Retrieving:** Users can retrieve a list of all NFTs available on the marketplace and view their personal collection of NFTs.

## Installation

To get started with the course project code, follow these steps:

1. Clone this repository to your local machine using the following command:

    ```shell
    git clone https://github.com/snsakib/develop-smart-contract-for-nft-marketplace.git
    ```

2. Change to the project directory:

    ```shell
    cd develop-smart-contract-for-nft-marketplace
    ```

3. Install the dependencies using npm or yarn:

    ```shell
    npm install
    ```
    or
    ```shell
    yarn install
    ```

4. To run the unit test file, open a terminal and run the following command:

    ```
    npx hardhat test
    ```