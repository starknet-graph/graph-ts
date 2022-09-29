import '../common/eager_offset'
import { Bytes } from '../common/collections'
import { BigInt } from '../common/numbers'

export namespace starknet {
  export class Block {
    constructor(
      public height: BigInt,
      public hash: Bytes,
      public prevHash: Bytes,
      public timestamp: BigInt,
      public transactions: Array<Transaction>,
    ) {}
  }

  export class Transaction {
    constructor(
      public type: TransactionType,
      public hash: Bytes,
      public events: Array<Event>,
    ) {}
  }

  export enum TransactionType {
    DEPLOY = 0,
    INVOKE_FUNCTION = 1,
    DECLARE = 2,
    L1_HANDLER = 3,
  }

  export class Event {
    constructor(
      public fromAddr: Bytes,
      public keys: Array<Bytes>,
      public data: Array<Bytes>,
    ) {}
  }
}
