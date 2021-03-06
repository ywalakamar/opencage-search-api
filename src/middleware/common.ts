import { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";

export const handleCors = (router: Router) => {
  router.use(cors({ credentials: true, origin: true }));
};

export const handleBodyRequestParsing = (router: Router) => {
  router.use(bodyParser.json());
  router.use(bodyParser.urlencoded({ extended: true }));
};

export const handleCompression = (router: Router) => {
  router.use(compression());
};
