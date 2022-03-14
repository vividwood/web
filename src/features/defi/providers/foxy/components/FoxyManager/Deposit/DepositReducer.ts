// import { SupportedFoxyVault, YearnVault } from '@shapeshiftoss/investor-yearn'
import { ChainTypes } from '@shapeshiftoss/types'
import { DepositValues } from 'features/defi/components/Deposit/Deposit'

// TODO: fill in type
type SupportedFoxyOpportunity = {
}

type EstimatedGas = {
  estimatedGasCrypto?: string
}

type FoxyDepositValues = DepositValues &
  EstimatedGas & {
    txStatus: string
    usedGasFee: string
  }

type FoxyDepositState = {
  foxyOpportunity: SupportedFoxyOpportunity
  userAddress: string | null
  approve: EstimatedGas
  deposit: FoxyDepositValues
  loading: boolean
  pricePerShare: string
  txid: string | null
}

export const initialState: FoxyDepositState = {
  txid: null,
  foxyOpportunity: {
    vaultAddress: '',
    tokenAddress: '',
    provider: '',
    chain: ChainTypes.Ethereum,
    type: '',
    expired: false,
    address: '',
    typeId: 'OPPORTUNITY_V2',
    token: '',
    name: '',
    version: '',
    symbol: '',
    decimals: '',
    tokenId: '',
    underlyingTokenBalance: {
      amount: '0',
      amountUsdc: '0'
    },
    metadata: {
      symbol: '',
      pricePerShare: '',
      migrationAvailable: false,
      latestVaultAddress: '',
      depositLimit: '',
      emergencyShutdown: false,
      controller: '',
      totalAssets: '',
      totalSupply: '',
      displayName: '',
      displayIcon: '',
      defaultDisplayToken: '',
      hideIfNoDeposits: false
    }
  },
  userAddress: null,
  loading: false,
  approve: {},
  pricePerShare: '',
  deposit: {
    fiatAmount: '',
    cryptoAmount: '',
    slippage: '',
    txStatus: 'pending',
    usedGasFee: ''
  }
}

export enum FoxyDepositActionType {
  SET_OPPORTUNITY = 'SET_OPPORTUNITY',
  SET_APPROVE = 'SET_APPROVE',
  SET_USER_ADDRESS = 'SET_USER_ADDRESS',
  SET_DEPOSIT = 'SET_DEPOSIT',
  SET_LOADING = 'SET_LOADING',
  SET_PRICE_PER_SHARE = 'SET_PRICE_PER_SHARE',
  SET_TXID = 'SET_TXID',
  SET_TX_STATUS = 'SET_TX_STATUS'
}

type SetFoxyOpportunitiesAction = {
  type: FoxyDepositActionType.SET_OPPORTUNITY
  payload: SupportedFoxyOpportunity | null
}

type SetApprove = {
  type: FoxyDepositActionType.SET_APPROVE
  payload: EstimatedGas
}

type SetDeposit = {
  type: FoxyDepositActionType.SET_DEPOSIT
  payload: Partial<FoxyDepositValues>
}

type SetUserAddress = {
  type: FoxyDepositActionType.SET_USER_ADDRESS
  payload: string
}

type SetLoading = {
  type: FoxyDepositActionType.SET_LOADING
  payload: boolean
}

type SetPricePerShare = {
  type: FoxyDepositActionType.SET_PRICE_PER_SHARE
  payload: string
}

type SetTxid = {
  type: FoxyDepositActionType.SET_TXID
  payload: string
}

type FoxyDepositActions =
  | SetFoxyOpportunitiesAction
  | SetApprove
  | SetDeposit
  | SetUserAddress
  | SetLoading
  | SetPricePerShare
  | SetTxid

export const reducer = (state: FoxyDepositState, action: FoxyDepositActions) => {
  switch (action.type) {
    case FoxyDepositActionType.SET_OPPORTUNITY:
      return { ...state, vault: { ...state.foxyOpportunity, ...action.payload } }
    case FoxyDepositActionType.SET_APPROVE:
      return { ...state, approve: action.payload }
    case FoxyDepositActionType.SET_DEPOSIT:
      return { ...state, deposit: { ...state.deposit, ...action.payload } }
    case FoxyDepositActionType.SET_USER_ADDRESS:
      return { ...state, userAddress: action.payload }
    case FoxyDepositActionType.SET_LOADING:
      return { ...state, loading: action.payload }
    case FoxyDepositActionType.SET_PRICE_PER_SHARE:
      return { ...state, pricePerShare: action.payload }
    case FoxyDepositActionType.SET_TXID:
      return { ...state, txid: action.payload }
    default:
      return state
  }
}