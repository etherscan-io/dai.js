declare global {
  interface Currency {}
  interface CurrencyRatio {}
  interface VaultResult {
     /**
     * The collateral type of this vault.
     *
     * ```ts
     * console.log('test code');
     * ```
     */
    vaultType: string;

    /**
     * The address of this vault.
     *
     * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     * tempor incididunt ut labore et dolore magna aliqua.
     *
     * ```ts
     * console.log('test code');
     * ```
     */
    vaultAddress: string;

    /**
     * Lorem ipsum.
     *
     * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     * tempor incididunt ut labore et dolore magna aliqua.
     *
     */
    encumberedCollateral: Currency;

    /**
     * Lorem ipsum.
     *
     * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     * tempor incididunt ut labore et dolore magna aliqua.
     *
     */
    encumberedDebt: Currency;

    /**
     * The price of this vault's collateral type.
     *
     * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     * tempor incididunt ut labore et dolore magna aliqua.
     *
     */
    collateralTypePrice: CurrencyRatio;

    /**
     * The value in DAI of this vault's debt.
     *
     * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     * tempor incididunt ut labore et dolore magna aliqua.
     *
     */
    debtValue: Currency;

    /**
     * The value in USD of this vault's locked collateral.
     *
     * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     * tempor incididunt ut labore et dolore magna aliqua.
     *
     */
    collateralValue: Currency;

    /**
     * The maximum amount DAI available to generate for this vault.
     *
     * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     * tempor incididunt ut labore et dolore magna aliqua.
     *
     */
    daiAvailable: Currency;


  }

  interface WatchInterfaceMcd {
    /** Watch the total encumbered debt of a collateral type
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static totalEncumberedDebt(collateralTypeName: string): Currency;

    /**
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static debtScalingFactor(collateralTypeName: string): BigNumber;

    /**
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static priceWithSafetyMargin(collateralTypeName: string): BigNumber;

    /** Get the Dai debt ceiling for a particular collateral type
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static debtCeiling(collateralTypeName: string): Currency;

    /** Minimum amount of debt that can be generated when opening a vault of that type
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static debtFloor(collateralTypeName: string): BigNumber;

    /** Watch the price of a collateral type
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static collateralTypePrice(collateralTypeName: string): Currency;

    /** Watch the prices of ilks defined in the system
     *
     * Default ilks defined in the dai.js mcd-plugin
     */
    static collateralTypesPrices(): Currency;

    /**
     * @param collateralTypeName String uniquely identifying a collateral type
     * @param vaultAddress String hexidecimal address of the vault handler
     */
    static unlockedCollateral(
      collateralTypeName: string,
      vaultAddress: string
    ): BigNumber;

    /**
     * @param collateralTypeName String uniquely identifying a collateral type
     * @param vaultAddress String hexidecimal address of the vault handler
     */
    static encumberedCollateral(
      collateralTypeName: string,
      vaultAddress: string
    ): BigNumber;

    /**
     * @param collateralTypeName String uniquely identifying a collateral type
     * @param vaultAddress String hexidecimal address of the vault handler
     */
    static encumberedDebt(
      collateralTypeName: string,
      vaultAddress: string
    ): BigNumber;

    /**
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static annualStabilityFee(collateralTypeName: string): number;

    /**
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static feeUpdateTimestamp(collateralTypeName: string): number;

    /**
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static liquidatorAddress(collateralTypeName: string): string;

    /**
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static liquidationPenalty(collateralTypeName: string): number;

    /**
     * @param collateralTypeName String uniquely identifying a collateral type
     */
    static maxAuctionLotSize(collateralTypeName: string): BigNumber;

    /**
     * @param id Numerical id of the vault
     */
    static debtValue(id: number): Currency;

    /**
     * @param id Numerical id of the vault
     */
    static collateralValue(id: number): Currency;

    /**
     * @param id Numerical id of the vault
     */
    static daiAvailable(id: number): Currency;

    /**
     * Get a vault by id.
     *
     * Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
     * tempor incididunt ut labore et dolore magna aliqua.
     *
     * ```js
     * const vault = watch.vaultById(2)
     * ```
     *
     * @param id Numerical id of the vault
     */
    static vault(id: number): VaultResult;
  }
}

export default WatchInterfaceMcd;