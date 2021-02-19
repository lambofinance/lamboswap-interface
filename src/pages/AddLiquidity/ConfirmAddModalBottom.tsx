import { Currency, CurrencyAmount, Fraction, Percent } from '@uniswap/sdk'
import React from 'react'
import { Text } from 'rebass'
import { ButtonPrimary } from '../../components/Button'
import { RowBetween, RowFixed } from '../../components/Row'
import CurrencyLogo from '../../components/CurrencyLogo'
import { Field } from '../../state/mint/actions'
import { TYPE } from '../../theme'

export function ConfirmAddModalBottom({
  noLiquidity,
  price,
  currencies,
  parsedAmounts,
  poolTokenPercentage,
  onAdd
}: {
  noLiquidity?: boolean
  price?: Fraction
  currencies: { [field in Field]?: Currency }
  parsedAmounts: { [field in Field]?: CurrencyAmount }
  poolTokenPercentage?: Percent
  onAdd: () => void
}) {
  return (
    <>
      <RowBetween>
        <TYPE.bodyT>{currencies[Field.CURRENCY_A]?.symbol} Deposited</TYPE.bodyT>
        <RowFixed>
          <CurrencyLogo currency={currencies[Field.CURRENCY_A]} style={{ marginRight: '8px' }} />
          <TYPE.bodyT>{parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}</TYPE.bodyT>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <TYPE.bodyT>{currencies[Field.CURRENCY_B]?.symbol} Deposited</TYPE.bodyT>
        <RowFixed>
          <CurrencyLogo currency={currencies[Field.CURRENCY_B]} style={{ marginRight: '8px' }} />
          <TYPE.bodyT>{parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}</TYPE.bodyT>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <TYPE.bodyT>Rates</TYPE.bodyT>
        <TYPE.bodyT>
          {`1 ${currencies[Field.CURRENCY_A]?.symbol} = ${price?.toSignificant(4)} ${
            currencies[Field.CURRENCY_B]?.symbol
          }`}
        </TYPE.bodyT>
      </RowBetween>
      <RowBetween style={{ justifyContent: 'flex-end' }}>
        <TYPE.bodyT>
          {`1 ${currencies[Field.CURRENCY_B]?.symbol} = ${price?.invert().toSignificant(4)} ${
            currencies[Field.CURRENCY_A]?.symbol
          }`}
        </TYPE.bodyT>
      </RowBetween>
      <RowBetween>
        <TYPE.bodyT>Share of Pool:</TYPE.bodyT>
        <TYPE.bodyT>{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%</TYPE.bodyT>
      </RowBetween>
      <ButtonPrimary style={{ margin: '20px 0 0 0' }} onClick={onAdd}>
        <Text fontWeight={500} fontSize={20}>
          {noLiquidity ? 'Create Pool & Supply' : 'Confirm Supply'}
        </Text>
      </ButtonPrimary>
    </>
  )
}
