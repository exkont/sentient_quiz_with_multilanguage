# What is Sentient

**Sentient** Protocol is a decentralized protocol that allows communities to build, govern and use **Loyal AI** — AI that is _community-aligned, community-owned, and community-controlled_. The protocol ensures **AI artifacts,** such as **models, agents, or tools** built using AI techniques that provide intelligent outputs, adhere to community alignment and governance decisions while allowing for economic incentives through tokenized ownership, creating a self-sustaining ecosystem. More specifically, loyal AI ensures:

* **Community-alignment**: AI artifacts truly represent the collective values and preferences of their creators — community curates data and selects alignment. Community alignment for the model is achieved through the granular alignment feature of _Loyalty Training_, which integrates community inputs at every stage of the pipeline. The resulting model's alignment reflects the consensus of its governing community while preserving its general AI capabilities.
* **Community-ownership**: AI artifacts should be collectively owned and governed by a community, ensuring that development remains permission-based and economic rewards are shared. This ownership is maintained on ownership contracts. One key problem that arises is that of identifying a model to assert ownership rights. This is solved through fingerprinting techniques, which embed unique identifiers in models to track their lineage. The fingerprinting feature of Loyalty Training reinforces community ownership, while blockchain-based contracts secure and verify it.
* **Community-control:** Community-control is defined as the ability to change the behavior of the model based on some specific prompts. This is facilitated through passive control mechanisms embedded during training, ensuring models behave predictably in response to predefined inputs. These mechanisms use specialized prompts to guide and modify model behavior when triggered.

# Architecture

<figure><img src="https://4111169151-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbgMFW30QEXkf5pOq6VyY%2Fuploads%2FRr31GQH80z7pqzUuc5n8%2FScreenshot%202025-02-23%20at%204.31.18%E2%80%AFPM.png?alt=media&#x26;token=dc9ec9c9-7a75-4eda-b3db-6490e717a62b" alt=""><figcaption><p>The architecture of Sentient, including two main components: blockchain and AI pipeline</p></figcaption></figure>

Sentient is built on two core components: the **Blockchain** and the **AI Pipeline**.

## Blockchain

The Blockchain components underpins the protocol, ensuring transparency and decentralized control over AI artifacts. It include three modules:

* **Governance**: A DAO-controlled system for decision-making on updates, alignment, and rewards.
* **Ownership**: Tokenized representation of artifact ownership.
* **DeFi**: Decentralized finance tools to support open, decentralized and fair governance and rewards for the shared AI economy.

## AI Pipeline

The AI pipeline serves as the foundation for developing and training loyal AI artifacts. It consists of two core procedures:

* **Data curation**: Community-driven data selection for model alignment.
* **Loyalty training**: Ensuring models remain aligned with community intentions.

## How the System Works

The diagram above shows a breakdown of the architecture and the interactions among its components:

* The AI pipeline produces **loyal AI artifacts** (e.g., models or agents) and submits them to the blockchain for onboarding.
* New **artifacts** are validated through the **governance module**, assigned a unique blockchain identity, and tokenized to represent **ownership**.
* **Owners** receive ownership tokens and participate in key artifact-related decisions, including artifact onboarding and upgrades, via governance mechanisms.
* **App Builders** develop applications using artifacts, while **users** pay fees to access these applications and artifacts.
* **DeFi applications** enable owners and builders to monetize their artifacts and applications, reinforcing economic incentives and facilitating trust-free governance.

# Architecture

<figure><img src="https://4111169151-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbgMFW30QEXkf5pOq6VyY%2Fuploads%2FRr31GQH80z7pqzUuc5n8%2FScreenshot%202025-02-23%20at%204.31.18%E2%80%AFPM.png?alt=media&#x26;token=dc9ec9c9-7a75-4eda-b3db-6490e717a62b" alt=""><figcaption><p>The architecture of Sentient, including two main components: blockchain and AI pipeline</p></figcaption></figure>

Sentient is built on two core components: the **Blockchain** and the **AI Pipeline**.

## Blockchain

The Blockchain components underpins the protocol, ensuring transparency and decentralized control over AI artifacts. It include three modules:

* **Governance**: A DAO-controlled system for decision-making on updates, alignment, and rewards.
* **Ownership**: Tokenized representation of artifact ownership.
* **DeFi**: Decentralized finance tools to support open, decentralized and fair governance and rewards for the shared AI economy.

## AI Pipeline

The AI pipeline serves as the foundation for developing and training loyal AI artifacts. It consists of two core procedures:

* **Data curation**: Community-driven data selection for model alignment.
* **Loyalty training**: Ensuring models remain aligned with community intentions.

## How the System Works

The diagram above shows a breakdown of the architecture and the interactions among its components:

* The AI pipeline produces **loyal AI artifacts** (e.g., models or agents) and submits them to the blockchain for onboarding.
* New **artifacts** are validated through the **governance module**, assigned a unique blockchain identity, and tokenized to represent **ownership**.
* **Owners** receive ownership tokens and participate in key artifact-related decisions, including artifact onboarding and upgrades, via governance mechanisms.
* **App Builders** develop applications using artifacts, while **users** pay fees to access these applications and artifacts.
* **DeFi applications** enable owners and builders to monetize their artifacts and applications, reinforcing economic incentives and facilitating trust-free governance.

# Governance

Sentient protocol will will enable various DAOs to govern updates and manage the shared economy surrounding their artifacts. The first DAO on the protocol, **SentientDAO**, will oversee the initial models onboarded to Sentient. **ArtifactDAO** functions as a versatile governance module, adaptable for governing models, agents, and tools.

## SentientDAO

💡

_Note: The design of SentientDAO is in its preliminary stages and may evolve as the protocol matures_

SentientDAO will co-govern certain forks of these models as they evolve under other DAOs within the Sentient ecosystem. Its responsibilities include:

* **Artifact onboarding**: Deciding which artifacts are accepted into the ecosystem based on community and technical standards.
* **Protocol emissions**: Allocating`SENT` emission it receives from the protocol as rewards to incentivize artifact contributions and ecosystem growth.
* **Liquidity provision**: Deploying specialized exchanges for trading artifact ownership tokens.
* **Contract management**: Managing the lifecycle of smart contracts, including adding, upgrading, or deprecating them.

SentientDAO utilizes a **signer network** for governance. The top `k` accounts — ranked by their total `SENT` ownership and delegated tokens — automatically gain access to the signer network.

## ArtifactDAO

ArtifactDAOs are decentralized organizations composed of artifact owners, which focus on model-specific governance, such as

* **Ownership assignment**: Defining and enforcing rules for distributing ownership tokens to contributors, ensuring fair recognition of value-added efforts.
* **Artifact updates**: Managing the lifecycle of artifacts, including:
  * Proposing and approving version updates.
  * Integrating new datasets and contributions.
  * Configuring loyalty training pipelines to align artifacts with community goals.
* **Model usage**: Setting conditions for model usage.
* **Rewards distribution**: Governing the distribution of rewards to the artifact owners.

Here is an example scenario of making governance decisions:

* **Alice**, **Bob**, and **Charlie** collaboratively produce a model `M` and submit it to the Sentient platform. They mutually agree on the initial ownership structure: `{Alice: 30%, Bob: 15%, Charlie: 15%, Reserve Pool (for future incentives): 40%}` .
* A multisignature agreement reflecting the ownership assignment is submitted alongside the model onboarding request. Upon approval, Alice, Bob and Charlie receive `30%`, `15%` and `15%` of the total supply of ownership tokens.
* **David** fine-tunes the model `M` to improve its reasoning capabilities, the improved model `M'` is submitted for onboarding. Alice, Bob and Charlie (as members of the ArtifactDAO of `M`) vote to approve the update, they decide to reward David with `5%` of the total token supply for his contribution.
* Upon approval, the updated token distribution becomes `{Alice: 30%, Bob: 15%, Charlie: 15%, David: 5%, reserve: 35%}`

# Ownership

Ownership of AI artifacts in the Sentient Protocol is tokenized, with each artifact linked to its own ERC-20 token contract. These tokens represents the fractional ownership in the artifact, granting holders rights such as voting in ArtifactDAO decisions, receiving usage rewards and transferring owner shares.

The key mechanisms work as follows:

* **Tokenized ownership**: Upon approval of a new artifact, the Artifact Factory contract creates a new ERC-20 contract with tokens representing fractional ownership of the artifact. `initial_amount` tokens are minted and distributed as per the pre-agreed ownership structure submitted during the onboarding process.
* **Fingerprints commitment**: To ensure artifact loyalty, fingerprints of the artifact are committed as a Merkle tree and distributed to artifact owners, allowing robust authentication of ownership.
* **Ownership challenge**: For any newly on-boarded artifact, for a period of one week, ownership challenges can be initialized. The challengers win the challenge if the new artifact contains sufficiently many fingerprints of challengers’ artifact.

## Model Governance Options

Here we discuss some other options for model governance:

1. **Non-transferable Ownership:** Ownership tokens may be designed as **non-transferable**, serving exclusively for governance purposes. In this approach:
   * Ownership tokens cannot be traded or transferred, but they can be used for ArtifactDAO voting. Optionally, owners stake `SENT` to receive governance tokens, which can be burned to reclaim `SENT`.
   * **Discussion**: The advantage of non-transferable ownership is the simplicity of manage fingerprints, since fingerprints can be assigned to a constant number of owners. While for transferrable ownership, additional mechanisms and assumptions are needed to avoid the "nothing at stake" problem.
2. **Versioning:** Ownership mechanisms can adapt to accommodate updates and multiple artifacts. Key considerations include:
   * **Multiple artifacts**: Allow a single ownership contract to govern multiple related artifacts, such as a model family. Fingerprints are committed for multiple artifacts on the same ownership contract.
   * **Version updates**: A new version of an artifact can either be treated as a new artifact with the same ownership contract or a new contract with its own ownership token.
   * **Minting ownership token**: Introduce inflationary mechanisms to mint additional tokens when new versions or models are added, with governance deciding on minting parameters.
   * **Discussion**: A single ownership contract for multiple versions simplifies governance but may complicate fingerprint tracking and reward distribution. Conversely, separate contracts provide clarity but increase overhead.

# DeFi

The DeFi layer in the Sentient Protocol allows communities to monetize their artifacts and applications. By leveraging decentralized finance mechanisms, the protocol ensures contributors and stakeholders have access to robust financial tools that support artifact development, ownership liquidity, and governance participation. There are different categories of DeFi protocols:

* **Model staking**: Staking plays a critical role in artifact onboarding and governance.
  * Artifact onboarding: Whenever an artifact proposal is added to the onboarding queue, contributors and/or other token holders stake `SENT` tokens to support the artifact. Staked tokens signify community interest and confidence in the artifact, ensuring only valuable and aligned artifacts are added to the ecosystem.
  * Governance participation: Optionally, when employing non-transferable ownership tokens, `SENT` can be staked for participating in governance. This approach aligns governance power with long-term system commitment.
* **Exchange**: When ownership tokens are transferrable, decentralized exchanges (DEXs) can be built to enable trading of ownership tokens, providing flexibility for token holders.
  * Free-market trading: DEXs for ownership tokens paired with any other tokens can always be established by the ownership token holders voluntarily.
  * SentientDAO-facilitated DEX: To enhance liquidity and trading accessibility, the SentientDAO can deploy a DEX at the creation of an Artifact with pairs `(OwnershipToken, SENT)` , of which the initial liquidity is provided by (a) the contributors from staked `SENT` tokens and (b) reserved ownership tokens or voluntary contributions from artifact owners.
* **Other instruments**: Beyond staking and exchanges, additional DeFi tools can be developed to create a vibrant model economy, such as borrowing and lending market, fee revenue sharing, yield farming etc.

## Discussion on Cross-chain Liquidity and Governance

<figure><img src="https://4111169151-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbgMFW30QEXkf5pOq6VyY%2Fuploads%2Fgit-blob-afb02ebcd7dd95ed357e8e6b197ea46fff59b351%2Fmulti-chain-governance.png?alt=media" alt=""><figcaption><p>The diagram illustrates the interactions between the Sentient Chain and a Partner Chain, including the flow of tokens, incentives, and governance updates.</p></figcaption></figure>

In the Sentient Protocol, ownership tokens play a crucial role in defining asset rights over AI artifacts. However, the flexibility of these tokens across different blockchain networks can impact liquidity, governance, and accessibility.

The primary driver behind cross-chain governance is the need for partner chains to “own” the artifact token and thereby create localized economies around a shared asset. By allowing a partner chain to hold and stake an artifact token — originally issued on the Sentient chain — they can build dedicated DeFi instruments, benefit from token emissions, and attract their own community of builders.

* Benefits of cross-chain liquidity and governance:
  * **Enhanced market access**: Partner chains generate additional on-chain activity and liquidity by using the artifact token for governance and fee payments, extending the market to a more established DeFi environment.
  * **Fee sharing and token emissions**: A portion of fees collected from artifact usage on partner chains is directed back to the Sentient chain, ensuring that value created by cross-chain activity benefits the original community. Simultaneously, token emissions —distributed as incentives — further align the interests of both ecosystems.
* Cross-chain implementation:
  * **Bridged ownership tokens**: To enable cross-chain liquidity, ownership tokens exist on multiple chains via bridges. Sentient Blockchain acts as the primary ledger for governance and all governance decisions are executed through a multi-chain synchronization mechanism.

To realize these benefits, two key elements are essential:

* **Shared value flow**: There must be a clearly defined mechanism for fee distribution and token emissions, ensuring that both chains receive a portion of the economic benefits. This shared value flow is critical for aligning incentives and maintaining a balanced partnership.
* **Fingerprint management**: As the model evolves (through version updates or modifications), an effective fingerprint management system is necessary. This system ensures that any updates or changes to the model are communicated and authenticated on the Sentient chain, preserving the integrity and continuity of governance.


# Smart Contracts

The smart contract architecture of the system is designed to facilitate interactions between users, AI artifacts and the DAOs. The core components includes:

1. **ArtifactFactory**: Responsible for deploying new artifacts and related contracts. This contract serves as the entry point for onboarding new artifacts into the system.
2. **Artifact**: The primary smart contract that manages user interactions, handling logic for fees, fingerprint verification, and rewards.
3. **Escrow**: A secure contract that holds and releases funds for rewards, ensuring fair and transparent payment distribution.
4. **Rewards**: Manages the reward logic, including taking snapshots of Ownership Token balances and distributing rewards accordingly.
5. **Ownership Token**: An ERC-20 token representing ownership shares in an artifact. Users holding these tokens are entitled to a portion of the rewards.

<figure><img src="https://4111169151-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbgMFW30QEXkf5pOq6VyY%2Fuploads%2FLia2XPTPEKvP82e75eKH%2Fdiagram-export-2-18-2025-4_50_34-PM.png?alt=media&#x26;token=b032525b-435c-4cec-9e74-1e6c2d0253db" alt=""><figcaption><p>Artifact Onboarding Flow</p></figcaption></figure>

Smart contracts enable the following key flows:

* Artifact onboarding flow (depicted in the above figure)
  * **Sentient DAO** invokes the **ArtifactFactory** contract to create a new artifact.
  * The **ArtifactFactory** deploys the **Artifact** contract and its associated **Rewards**, **Escrow**, and **Ownership Token** contracts.
  * The **ArtifactFactory** returns the address of the newly deployed **Artifact** contract.
  * The ownership token owners automatically form the **ArtifactDAO** and can further onboard new artifacts in the same family (the dashed path). The upcoming artifacts will be initiated with a new **Escrow** contract.
* Fingerprint Verification Flow
  * The trusted execution environment (TEE) commits the **public fingerprints** from **private fingerprints** (the private fingerprint are stored secretly off-chain).
  * Public fingerprints are stored in a **Merkle Tree**, and the **Merkle Root** is recorded in the **Artifact** contract.
  * Owners request Merkle proofs for fingerprint verification to check ownership without revealing private fingerprints.
* Fee Deposit Flow
  * AI agents or users pay usage fees in native tokens or supported ERC-20 stablecoins.
  * The **Artifact** contract receives the fee and transfers it to the **Escrow** contract.
  * The **Escrow** contract securely stores the funds until they are distributed as rewards.
* Rewards Distribution Flow
  * The **Sentient DAO** takes periodic snapshots of **Ownership Token** balances.
  * Users can claim rewards based on their token holdings at different snapshot timestamps.
  * The **Rewards** contract calculates the user's share and pulls the corresponding amount from the **Escrow** contract.

Github link with more details will be provided soon.

<figure><img src="https://4111169151-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FbgMFW30QEXkf5pOq6VyY%2Fuploads%2FVEw1FMfwGkvWBj6uWKlv%2Fdiagram-export-2-18-2025-5_37_09-PM.png?alt=media&#x26;token=a3ebb350-4767-4de2-a661-38e756e60add" alt=""><figcaption></figcaption></figure>
