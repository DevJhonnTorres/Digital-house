# Digital House 🏠

A decentralized real estate rental platform built for ETH Online 2025. Digital House enables property owners to rent their spaces using blockchain technology with AI-powered pricing and crypto payments.

## 🌟 About Digital House

Digital House is a revolutionary platform that transforms real estate rentals by:
- **Property Management**: We act as administrators for property owners, managing their real estate assets
- **Decentralized Rentals**: Using blockchain for transparent and secure rental agreements
- **AI-Powered Pricing**: Automated rental price estimation based on location, rooms, square meters, and other property details
- **Crypto Payments**: Accept payments in ETH, USDC, and PYUSD
- **Service Fee**: 3% fee over rental price for platform services

## 🔐 **Easy Authentication**
- Login with email or phone via Privy
- Automatic embedded wallet creation
- Export private keys functionality
- Secure authentication flow

## 💰 **Multi-Token Support**
- **ETH**: Native Ethereum (Testnet)
- **USDC**: USD Coin (Circle USDC)
- **PYUSD**: PayPal USD Stablecoin
  - Ethereum Sepolia: `0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9`
  - Arbitrum Sepolia: `0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B1`

## 🚀 **Advanced Features**
- Real-time balance fetching across multiple chains
- Direct blockchain transactions via embedded wallets
- QR code scanning for easy address input
- Transaction history with block explorer integration
- Responsive design with dark/light mode support
- Beautiful modern UI with TailwindCSS

## 🔗 **Network Support**
- Ethereum Sepolia (Chain ID: 11155111)
- Arbitrum Sepolia (Chain ID: 421614)
- Base Sepolia (Chain ID: 84532)
- Real-time price data from CoinGecko

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/digital-house/digital-house.git
   cd digital-house/digitital_house
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file with your configuration:
   ```env
   NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
digitital_house/
├── components/
│   ├── shared/           # Reusable UI components
│   └── wallet/           # Wallet-specific components
├── config/              # Chain and network configurations
│   ├── chains.ts
│   └── networks.ts
├── hooks/               # Custom React hooks
│   ├── useMultiChainBalances.ts
│   ├── useTokenBalances.ts
│   └── useTokenPrices.ts
├── utils/               # Utility functions
│   ├── tokenUtils.ts
│   └── walletValidation.ts
├── types/               # TypeScript definitions
├── context/             # React context providers
└── services/            # Backend services
```

## 💳 Supported Tokens

| Token | Contract Address | Decimals | Networks |
|-------|------------------|----------|----------|
| **ETH** | Native | 18 | All Networks |
| **USDC** | Various (see below) | 6 | All Networks |
| **PYUSD** | `0xCaC524BcA292aaade2DF8A05cC58F0a65B1B3bB9` | 6 | Ethereum Sepolia |
| **PYUSD** | `0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B1` | 6 | Arbitrum Sepolia |

### USDC Addresses
- Ethereum Sepolia: `0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238`
- Arbitrum Sepolia: `0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d`
- Base Sepolia: `0x036CbD53842c5426634e7929541eC2318f3dCF7e`

## 🔧 Key Technologies

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: TailwindCSS with dark mode support
- **Authentication**: Privy (Email/Phone)
- **Blockchain**: Viem, Multi-chain (Ethereum, Arbitrum, Base Sepolia testnets)
- **Embedded Wallets**: Privy Embedded Wallets
- **Smart Contracts**: Coming soon for rental agreements
- **AI Pricing**: Coming soon for automated property valuation
- **Deployment**: Vercel

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel:**
   ```bash
   npm install -g vercel
   vercel link
   ```

2. **Set Environment Variables** in Vercel Dashboard:
   - `NEXT_PUBLIC_PRIVY_APP_ID`

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### Live Demo
🌐 **Coming soon at digital-house.vercel.app**

## 🔐 Security Features

- **Embedded Wallets**: Secure key management via Privy
- **Multi-Chain Support**: Transactions across Ethereum, Arbitrum, and Base
- **Private Key Export**: Users can export their private keys when needed
- **Contract Verification**: All token contracts verified on block explorers
- **Secure Transactions**: Proper ABI encoding and validation
- **Wallet Validation**: Duplicate wallet prevention system

## 🛠️ Development Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
npm run type-check  # TypeScript type checking
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

ISC License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **GitHub**: Coming soon
- **ETH Online 2025**: [ETHGlobal](https://ethglobal.com)
- **Documentation**: In development

## 💡 About Digital House

Digital House is a project built for ETH Online 2025, revolutionizing real estate rentals through:
- **Blockchain Technology**: Transparent and secure rental agreements
- **AI Integration**: Automated property valuation and pricing
- **Crypto Payments**: Accept PYUSD, USDC, and ETH
- **3% Service Fee**: Competitive platform fee for property management

## 🎯 Roadmap

### Phase 1 (Current - Week 1)
- ✅ Multi-chain wallet integration
- ✅ PYUSD token support
- ✅ Basic UI/UX for wallet management

### Phase 2 (Week 2-3)
- 🔄 Smart contract development for rental agreements
- 🔄 AI-powered pricing engine
- 🔄 Property listing interface
- 🔄 Rental booking system

### Phase 3 (Week 4+)
- 📋 Full platform launch
- 📋 Advanced property management features
- 📋 Review and rating system

---

**Built with ❤️ for ETH Online 2025** 
# Digital-house
