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

export class Claim extends ethereum.Event {
  get params(): Claim__Params {
    return new Claim__Params(this);
  }
}

export class Claim__Params {
  _event: Claim;

  constructor(event: Claim) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _claimAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _fid(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _account(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class GetBack extends ethereum.Event {
  get params(): GetBack__Params {
    return new GetBack__Params(this);
  }
}

export class GetBack__Params {
  _event: GetBack;

  constructor(event: GetBack) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _token(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _claimAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _fid(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _account(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class NewRedPackage extends ethereum.Event {
  get params(): NewRedPackage__Params {
    return new NewRedPackage__Params(this);
  }
}

export class NewRedPackage__Params {
  _event: NewRedPackage;

  constructor(event: NewRedPackage) {
    this._event = event;
  }

  get index(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get _redPackgeType(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get _token(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _totalAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _totalNumber(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get _fid(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get _account(): Address {
    return this._event.parameters[6].value.toAddress();
  }

  get _memo(): string {
    return this._event.parameters[7].value.toString();
  }

  get _symbol(): string {
    return this._event.parameters[8].value.toString();
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

export class HelloPayRedPackageFactory__redPackagesResult {
  value0: i32;
  value1: boolean;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;
  value9: Address;
  value10: string;

  constructor(
    value0: i32,
    value1: boolean,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt,
    value9: Address,
    value10: string,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0)),
    );
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    map.set("value9", ethereum.Value.fromAddress(this.value9));
    map.set("value10", ethereum.Value.fromString(this.value10));
    return map;
  }

  getRedPackageType(): i32 {
    return this.value0;
  }

  getIsNativeToken(): boolean {
    return this.value1;
  }

  getToken(): Address {
    return this.value2;
  }

  getTotalAmount(): BigInt {
    return this.value3;
  }

  getRemainAmount(): BigInt {
    return this.value4;
  }

  getTotalNumber(): BigInt {
    return this.value5;
  }

  getRemainNumber(): BigInt {
    return this.value6;
  }

  getStarttime(): BigInt {
    return this.value7;
  }

  getFid(): BigInt {
    return this.value8;
  }

  getAccount(): Address {
    return this.value9;
  }

  getSymbol(): string {
    return this.value10;
  }
}

export class HelloPayRedPackageFactory extends ethereum.SmartContract {
  static bind(address: Address): HelloPayRedPackageFactory {
    return new HelloPayRedPackageFactory("HelloPayRedPackageFactory", address);
  }

  MAX_NUMBER(): BigInt {
    let result = super.call("MAX_NUMBER", "MAX_NUMBER():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MAX_NUMBER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MAX_NUMBER", "MAX_NUMBER():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  MIN_NUMBER(): BigInt {
    let result = super.call("MIN_NUMBER", "MIN_NUMBER():(uint256)", []);

    return result[0].toBigInt();
  }

  try_MIN_NUMBER(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("MIN_NUMBER", "MIN_NUMBER():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  allowed_tokens(param0: Address): boolean {
    let result = super.call(
      "allowed_tokens",
      "allowed_tokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );

    return result[0].toBoolean();
  }

  try_allowed_tokens(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "allowed_tokens",
      "allowed_tokens(address):(bool)",
      [ethereum.Value.fromAddress(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  expiration_time(): BigInt {
    let result = super.call(
      "expiration_time",
      "expiration_time():(uint256)",
      [],
    );

    return result[0].toBigInt();
  }

  try_expiration_time(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "expiration_time",
      "expiration_time():(uint256)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  globalIndex(): BigInt {
    let result = super.call("globalIndex", "globalIndex():(uint256)", []);

    return result[0].toBigInt();
  }

  try_globalIndex(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("globalIndex", "globalIndex():(uint256)", []);
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

  redPackages(param0: BigInt): HelloPayRedPackageFactory__redPackagesResult {
    let result = super.call(
      "redPackages",
      "redPackages(uint256):(uint8,bool,address,uint256,uint256,uint256,uint256,uint256,uint256,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );

    return new HelloPayRedPackageFactory__redPackagesResult(
      result[0].toI32(),
      result[1].toBoolean(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt(),
      result[9].toAddress(),
      result[10].toString(),
    );
  }

  try_redPackages(
    param0: BigInt,
  ): ethereum.CallResult<HelloPayRedPackageFactory__redPackagesResult> {
    let result = super.tryCall(
      "redPackages",
      "redPackages(uint256):(uint8,bool,address,uint256,uint256,uint256,uint256,uint256,uint256,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new HelloPayRedPackageFactory__redPackagesResult(
        value[0].toI32(),
        value[1].toBoolean(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt(),
        value[9].toAddress(),
        value[10].toString(),
      ),
    );
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

  get _allowed_tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ClaimRedPackageCall extends ethereum.Call {
  get inputs(): ClaimRedPackageCall__Inputs {
    return new ClaimRedPackageCall__Inputs(this);
  }

  get outputs(): ClaimRedPackageCall__Outputs {
    return new ClaimRedPackageCall__Outputs(this);
  }
}

export class ClaimRedPackageCall__Inputs {
  _call: ClaimRedPackageCall;

  constructor(call: ClaimRedPackageCall) {
    this._call = call;
  }

  get _fid(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _targetIndex(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ClaimRedPackageCall__Outputs {
  _call: ClaimRedPackageCall;

  constructor(call: ClaimRedPackageCall) {
    this._call = call;
  }
}

export class GetBackExpiratedRedPackageCall extends ethereum.Call {
  get inputs(): GetBackExpiratedRedPackageCall__Inputs {
    return new GetBackExpiratedRedPackageCall__Inputs(this);
  }

  get outputs(): GetBackExpiratedRedPackageCall__Outputs {
    return new GetBackExpiratedRedPackageCall__Outputs(this);
  }
}

export class GetBackExpiratedRedPackageCall__Inputs {
  _call: GetBackExpiratedRedPackageCall;

  constructor(call: GetBackExpiratedRedPackageCall) {
    this._call = call;
  }

  get _targetIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GetBackExpiratedRedPackageCall__Outputs {
  _call: GetBackExpiratedRedPackageCall;

  constructor(call: GetBackExpiratedRedPackageCall) {
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

export class SendRedPackageCall extends ethereum.Call {
  get inputs(): SendRedPackageCall__Inputs {
    return new SendRedPackageCall__Inputs(this);
  }

  get outputs(): SendRedPackageCall__Outputs {
    return new SendRedPackageCall__Outputs(this);
  }
}

export class SendRedPackageCall__Inputs {
  _call: SendRedPackageCall;

  constructor(call: SendRedPackageCall) {
    this._call = call;
  }

  get _redPackgeType(): i32 {
    return this._call.inputValues[0].value.toI32();
  }

  get _token(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _totalAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _totalNumber(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _fid(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _memo(): string {
    return this._call.inputValues[5].value.toString();
  }
}

export class SendRedPackageCall__Outputs {
  _call: SendRedPackageCall;

  constructor(call: SendRedPackageCall) {
    this._call = call;
  }
}

export class SetAllowedTokensCall extends ethereum.Call {
  get inputs(): SetAllowedTokensCall__Inputs {
    return new SetAllowedTokensCall__Inputs(this);
  }

  get outputs(): SetAllowedTokensCall__Outputs {
    return new SetAllowedTokensCall__Outputs(this);
  }
}

export class SetAllowedTokensCall__Inputs {
  _call: SetAllowedTokensCall;

  constructor(call: SetAllowedTokensCall) {
    this._call = call;
  }

  get _allowed_tokens(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get _status(): Array<boolean> {
    return this._call.inputValues[1].value.toBooleanArray();
  }
}

export class SetAllowedTokensCall__Outputs {
  _call: SetAllowedTokensCall;

  constructor(call: SetAllowedTokensCall) {
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
