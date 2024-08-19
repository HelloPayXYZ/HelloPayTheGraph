// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class CheckIn extends ethereum.Event {
  get params(): CheckIn__Params {
    return new CheckIn__Params(this);
  }
}

export class CheckIn__Params {
  _event: CheckIn;

  constructor(event: CheckIn) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get currentCheckInNumber(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get checkInReturn(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get completedReturn(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get memo(): string {
    return this._event.parameters[5].value.toString();
  }

  get detailURL(): string {
    return this._event.parameters[6].value.toString();
  }
}

export class ClaimDonation extends ethereum.Event {
  get params(): ClaimDonation__Params {
    return new ClaimDonation__Params(this);
  }
}

export class ClaimDonation__Params {
  _event: ClaimDonation;

  constructor(event: ClaimDonation) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get donateToken(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get donateAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Donation extends ethereum.Event {
  get params(): Donation__Params {
    return new Donation__Params(this);
  }
}

export class Donation__Params {
  _event: Donation;

  constructor(event: Donation) {
    this._event = event;
  }

  get donor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get donateToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get donateAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get memo(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Supervise extends ethereum.Event {
  get params(): Supervise__Params {
    return new Supervise__Params(this);
  }
}

export class Supervise__Params {
  _event: Supervise;

  constructor(event: Supervise) {
    this._event = event;
  }

  get supervisor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get fid(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class VestingCoachVault__checkInHistoryResult {
  value0: string;
  value1: string;

  constructor(value0: string, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }

  getMemo(): string {
    return this.value0;
  }

  getDetailURL(): string {
    return this.value1;
  }
}

export class VestingCoachVault__donationHistoryResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: string;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: string,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromString(this.value3));
    return map;
  }

  getDonateToken(): Address {
    return this.value0;
  }

  getDonor(): Address {
    return this.value1;
  }

  getDonateAmount(): BigInt {
    return this.value2;
  }

  getMemo(): string {
    return this.value3;
  }
}

export class VestingCoachVault__totalDonationStatusResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getTotalAmount(): BigInt {
    return this.value0;
  }

  getClaimedAmount(): BigInt {
    return this.value1;
  }
}

export class VestingCoachVault extends ethereum.SmartContract {
  static bind(address: Address): VestingCoachVault {
    return new VestingCoachVault("VestingCoachVault", address);
  }

  COMPLETED_CHECK_IN_NUMBER(): BigInt {
    let result = super.call(
      "COMPLETED_CHECK_IN_NUMBER",
      "COMPLETED_CHECK_IN_NUMBER():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_COMPLETED_CHECK_IN_NUMBER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "COMPLETED_CHECK_IN_NUMBER",
      "COMPLETED_CHECK_IN_NUMBER():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkInDuration(): BigInt {
    let result = super.call(
      "checkInDuration",
      "checkInDuration():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_checkInDuration(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "checkInDuration",
      "checkInDuration():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  checkInHistory(param0: BigInt): VestingCoachVault__checkInHistoryResult {
    let result = super.call(
      "checkInHistory",
      "checkInHistory(uint256):(string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new VestingCoachVault__checkInHistoryResult(
      result[0].toString(),
      result[1].toString(),
    );
  }

  try_checkInHistory(
    param0: BigInt,
  ): ethereum.CallResult<VestingCoachVault__checkInHistoryResult> {
    let result = super.tryCall(
      "checkInHistory",
      "checkInHistory(uint256):(string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VestingCoachVault__checkInHistoryResult(
        value[0].toString(),
        value[1].toString(),
      ),
    );
  }

  checkInReturn(): BigInt {
    let result = super.call("checkInReturn", "checkInReturn():(uint256)", []);

    return result[0].toBigInt();
  }

  try_checkInReturn(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "checkInReturn",
      "checkInReturn():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  completedReturn(): BigInt {
    let result = super.call(
      "completedReturn",
      "completedReturn():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_completedReturn(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "completedReturn",
      "completedReturn():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  currentCheckInNumber(): BigInt {
    let result = super.call(
      "currentCheckInNumber",
      "currentCheckInNumber():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_currentCheckInNumber(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentCheckInNumber",
      "currentCheckInNumber():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  donationHistory(param0: BigInt): VestingCoachVault__donationHistoryResult {
    let result = super.call(
      "donationHistory",
      "donationHistory(uint256):(address,address,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new VestingCoachVault__donationHistoryResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toString(),
    );
  }

  try_donationHistory(
    param0: BigInt,
  ): ethereum.CallResult<VestingCoachVault__donationHistoryResult> {
    let result = super.tryCall(
      "donationHistory",
      "donationHistory(uint256):(address,address,uint256,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VestingCoachVault__donationHistoryResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toString(),
      ),
    );
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isDonor(param0: Address): boolean {
    let result = super.call("isDonor", "isDonor(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_isDonor(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isDonor", "isDonor(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isSupervisor(param0: Address): boolean {
    let result = super.call("isSupervisor", "isSupervisor(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);

    return result[0].toBoolean();
  }

  try_isSupervisor(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isSupervisor", "isSupervisor(address):(bool)", [
      ethereum.Value.fromAddress(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lastCheckInTime(): BigInt {
    let result = super.call(
      "lastCheckInTime",
      "lastCheckInTime():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_lastCheckInTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastCheckInTime",
      "lastCheckInTime():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerFid(): BigInt {
    let result = super.call("ownerFid", "ownerFid():(uint256)", []);

    return result[0].toBigInt();
  }

  try_ownerFid(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("ownerFid", "ownerFid():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  starttime(): BigInt {
    let result = super.call("starttime", "starttime():(uint256)", []);

    return result[0].toBigInt();
  }

  try_starttime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("starttime", "starttime():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalCoachFund(): BigInt {
    let result = super.call("totalCoachFund", "totalCoachFund():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalCoachFund(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalCoachFund",
      "totalCoachFund():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalDonatedTokens(param0: BigInt): Address {
    let result = super.call(
      "totalDonatedTokens",
      "totalDonatedTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return result[0].toAddress();
  }

  try_totalDonatedTokens(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "totalDonatedTokens",
      "totalDonatedTokens(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalDonationStatus(
    param0: Address,
  ): VestingCoachVault__totalDonationStatusResult {
    let result = super.call(
      "totalDonationStatus",
      "totalDonationStatus(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(param0)],
    );

    return new VestingCoachVault__totalDonationStatusResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_totalDonationStatus(
    param0: Address,
  ): ethereum.CallResult<VestingCoachVault__totalDonationStatusResult> {
    let result = super.tryCall(
      "totalDonationStatus",
      "totalDonationStatus(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new VestingCoachVault__totalDonationStatusResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  trainingDesc(): string {
    let result = super.call("trainingDesc", "trainingDesc():(string)", []);

    return result[0].toString();
  }

  try_trainingDesc(): ethereum.CallResult<string> {
    let result = super.tryCall("trainingDesc", "trainingDesc():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  trainingName(): string {
    let result = super.call("trainingName", "trainingName():(string)", []);

    return result[0].toString();
  }

  try_trainingName(): ethereum.CallResult<string> {
    let result = super.tryCall("trainingName", "trainingName():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _factory(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _totalCoachFund(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _ownerFid(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _trainingName(): string {
    return this._call.inputValues[4].value.toString();
  }

  get _trainingDesc(): string {
    return this._call.inputValues[5].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CheckInCall extends ethereum.Call {
  get inputs(): CheckInCall__Inputs {
    return new CheckInCall__Inputs(this);
  }

  get outputs(): CheckInCall__Outputs {
    return new CheckInCall__Outputs(this);
  }
}

export class CheckInCall__Inputs {
  _call: CheckInCall;

  constructor(call: CheckInCall) {
    this._call = call;
  }

  get _memo(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _detailURL(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class CheckInCall__Outputs {
  _call: CheckInCall;

  constructor(call: CheckInCall) {
    this._call = call;
  }
}

export class DonateCall extends ethereum.Call {
  get inputs(): DonateCall__Inputs {
    return new DonateCall__Inputs(this);
  }

  get outputs(): DonateCall__Outputs {
    return new DonateCall__Outputs(this);
  }
}

export class DonateCall__Inputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }

  get _donateToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _donateAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _fid(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _memo(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class DonateCall__Outputs {
  _call: DonateCall;

  constructor(call: DonateCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SuperviseCall extends ethereum.Call {
  get inputs(): SuperviseCall__Inputs {
    return new SuperviseCall__Inputs(this);
  }

  get outputs(): SuperviseCall__Outputs {
    return new SuperviseCall__Outputs(this);
  }
}

export class SuperviseCall__Inputs {
  _call: SuperviseCall;

  constructor(call: SuperviseCall) {
    this._call = call;
  }

  get _fid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SuperviseCall__Outputs {
  _call: SuperviseCall;

  constructor(call: SuperviseCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
