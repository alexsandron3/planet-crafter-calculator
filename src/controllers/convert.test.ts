import { Request, Response } from "express";
import { Convert } from "./convert.controller";
import HTTP_STATUS_CODES from "../constants/httpStatusCodes";

describe("Função de converter", () => {
  it("Deve retornar status 200 quando nenhum erro ocorrer", () => {
    const req = {} as Request;
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as Response;

    Convert(req, res);

    expect(res.status).toHaveBeenCalledWith(HTTP_STATUS_CODES.OK);
  });
});
