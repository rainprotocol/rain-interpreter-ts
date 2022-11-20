import { BigNumber } from "ethers";
import { updateTimesForTierRange } from "../../../lib/TierReport";

/**
 * @public
 */
export function OpUpdateTimesForTierRange(
    _inputs: BigNumber[],
    _operand: number,
    _data?: any
): BigNumber[] {
    const item2_ = _inputs.pop()
    const item1_ = _inputs.pop()
    if (item1_ && item2_ !== undefined) return [
        updateTimesForTierRange(item1_, item2_, _operand)
    ]
    else throw new Error('Undefined stack variables')
}