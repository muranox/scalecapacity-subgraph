// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class ScaleCapacityEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ScaleCapacityEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ScaleCapacityEntity entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ScaleCapacityEntity", id.toString(), this);
    }
  }

  static load(id: string): ScaleCapacityEntity | null {
    return changetype<ScaleCapacityEntity | null>(
      store.get("ScaleCapacityEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenIDs(): Array<BigInt> | null {
    let value = this.get("tokenIDs");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigIntArray();
    }
  }

  set tokenIDs(value: Array<BigInt> | null) {
    if (!value) {
      this.unset("tokenIDs");
    } else {
      this.set("tokenIDs", Value.fromBigIntArray(<Array<BigInt>>value));
    }
  }
}