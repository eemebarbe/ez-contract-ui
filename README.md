# Concept

Deadline is imagined as a DAO building block used to ensure accountability and enhance trustlessness in between donors and recepients by enforcing funding milestones and by providing an intermediary contract which is not under the control of either party involved. A project's funding is sent to the Deadline contract, and then the recepient confirms that they agree to the amount of funding and to the date which the project is expected to be completed by. When the recepient completes the work, the DAO pings the contract agreement, verifying that they are satified with the results, making the payment available to whom it's owed. If the deadline passes, and the DAO hasn't verified that the requested work is complete, the funding is opened to be returned to the DAO.

I intend to include a number of configuration options which have probably already come to your mind; such as an upfront payment made available immediately, or multiple milestones which release funding over time.

This project is not complete at the moment. I'm new to the space and not even really sure if this has the use case that I thought it might. This is mainly just a project meant for me to learn Solidity and become more familiar with the tools and libraries commonly used to develop and deploy smart contracts.

This repository will eventually be split into two seperate projects. I'm in the process of building a React component library built with ethers.js which will accept an ethers Contract instance and provide a fully functioning front end for your smart contract, in addition to individual components that you can use more flexibly while building out your client.
