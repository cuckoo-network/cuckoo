# Recommended Setup for Staking Contract

| param                   | val                                        |
|-------------------------|--------------------------------------------|
| _timeUnit               | 365 * 24 * 3600 = 31536000                 |
| _rewardRatioNumerator   | 4                                          |
| _rewardRatioDenominator | 100                                        |
| _stakingToken           | 0x7bd97d61DcE3608b2F93D493FD0f42D8C77fB8E9 |
| _rewardToken            | 0x7bd97d61DcE3608b2F93D493FD0f42D8C77fB8E9 |
| _nativeTokenWrapper     | 0x7bd97d61DcE3608b2F93D493FD0f42D8C77fB8E9 |


Can we have native staking by using 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE as _stakingToken and _rewardToken? It is
supposed to be so but deployment fails.
