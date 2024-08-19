import { BigInt } from "@graphprotocol/graph-ts"
import { NewRedPackage, Claim } from "../generated/HelloPayRedPackageFactory/HelloPayRedPackageFactory"
import { ClaimRecord, RedPackge } from "../generated/schema"


export function handleNewRedPackage(event: NewRedPackage): void {
    let redPackage = RedPackge.load(event.params.index.toString())
    if (!redPackage) {
        redPackage = new RedPackge(event.params.index.toString())
        redPackage.account = event.params._account.toHexString()
        redPackage.fid = event.params._fid.toString()
        redPackage.token = event.params._token.toHexString()
        redPackage.isNativeToken = event.params._token.toHexString() == "0x0000000000000000000000000000000000000000"
        redPackage.totalAmount = event.params._totalAmount
        redPackage.totalNumber = event.params._totalNumber
        redPackage.remainAmount = event.params._totalAmount
        redPackage.remainNumber = event.params._totalNumber
        redPackage.starttime = event.block.timestamp
        redPackage.memo = event.params._memo
        redPackage.symbol = event.params._symbol
        redPackage.rpType = event.params._redPackgeType == 1 ? "Lucky Money Type" : "Common Type"
        redPackage.accounts = []
    }
    
    redPackage.save()
}

export function handleClaim(event: Claim): void {
    let redPackage = RedPackge.load(event.params.index.toString())
    if (!redPackage) {
        redPackage = new RedPackge(event.params.index.toString())
        redPackage.account = event.params._account.toHexString()
        redPackage.fid = ''
        redPackage.token = event.params._token.toHexString()
        redPackage.isNativeToken = event.params._token.toHexString() == "0x0000000000000000000000000000000000000000"
        redPackage.totalAmount = BigInt.fromI32(0)
        redPackage.totalNumber = BigInt.fromI32(0)
        redPackage.remainAmount = BigInt.fromI32(0)
        redPackage.remainNumber = BigInt.fromI32(0)
        redPackage.starttime = event.block.timestamp
        redPackage.memo = ''
        redPackage.symbol = ''
        redPackage.rpType = ''
        redPackage.accounts = []
    }
    
    redPackage.remainAmount = redPackage.remainAmount.minus(event.params._claimAmount)
    redPackage.remainNumber = redPackage.remainNumber.minus(BigInt.fromI32(1))

    let claimRecord = ClaimRecord.load(event.params.index.toString() + '-' + event.params._fid.toString())
    if (!claimRecord) {
        claimRecord = new ClaimRecord(event.params.index.toString() + '-' + event.params._fid.toString())
        claimRecord.account = event.params._account.toHexString()
        claimRecord.fid = event.params._fid.toString()
        claimRecord.account = event.params._account.toHexString()
        claimRecord.claimAmount = event.params._claimAmount
    }

    let allAccounts = redPackage.accounts
    allAccounts.push(claimRecord.id)
    redPackage.accounts = allAccounts

    redPackage.save()
    claimRecord.save()
}
