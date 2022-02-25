import { BoxProps, Button, ButtonGroup } from '@chakra-ui/react'
import { Amount } from 'components/Amount/Amount'

const PERCENT_OPTIONS = [0.25, 0.5, 0.75, 1]

type PercentOptionsRowProps = {
  onPercentClick: (option: number) => void
  percent: number | null
}
export const PercentOptionsRow = ({
  percent,
  onPercentClick,
  ...styleProps
}: PercentOptionsRowProps & BoxProps) => (
  <ButtonGroup bgColor='gray.850' borderRadius='12px' {...styleProps}>
    {PERCENT_OPTIONS.map(option => (
      <Button
        isActive={option === percent}
        key={option}
        variant='ghost'
        colorScheme='blue'
        onClick={() => onPercentClick(option)}
        flexGrow={1}
        height='30px'
        fontSize='sm'
      >
        {option === 1 ? (
          'Max'
        ) : (
          <Amount.Percent
            value={option}
            options={{
              minimumFractionDigits: 0,
              maximumFractionDigits: 0
            }}
          />
        )}
      </Button>
    ))}
  </ButtonGroup>
)