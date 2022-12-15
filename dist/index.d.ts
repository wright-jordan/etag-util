/// <reference types="node" />
import type { IncomingMessage, ServerResponse } from "http";
/** Sets cache-control and etag headers. Ends response with status code 304 if etags match. */
export declare function etag(data: string, strategy: string, req: IncomingMessage, res: ServerResponse): void;
