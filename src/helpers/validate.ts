import Ajv from "ajv";
import log from "$helpers/log";
import addFormat from "ajv-formats";

const logger = log("Validate");

const AjvInstance = new Ajv();

addFormat(AjvInstance);

export function validate(schemaKeyRef: AjvSchema, data: any) {
  const validate = AjvInstance.validate(schemaKeyRef as any, data);

  if (validate) return;

  logger.error(AjvInstance.errors);
}
