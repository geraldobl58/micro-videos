import InvalidUuidError from "../errors/invalid-uuid.error";

import UniqueEntityId from "./unique-entity-id.vo";

import { validate as uuidValidate } from "uuid";

describe("UniqueEntityId Unit Tests", () => {
  it("should throw error when uuid is invalid", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
    expect(() => new UniqueEntityId("fake id")).toThrow(new InvalidUuidError());
    expect(validateSpy).toBeCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
    const uuid = "d4ecaeca-defe-4e66-84d3-a4a1cef037a4";
    const vo = new UniqueEntityId(uuid);
    expect(vo.id).toBe(uuid);
    expect(validateSpy).toBeCalled();
  });

  it("should accept a uuid passed in constructor", () => {
    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, "validate");
    const vo = new UniqueEntityId();
    expect(uuidValidate(vo.id)).toBeTruthy();
    expect(validateSpy).toBeCalled();
  });
});
