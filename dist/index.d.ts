/// <reference types="node" />
import type { IncomingMessage, ServerResponse } from "http";
/** Sets cache-control and etag headers. Returns true if tags match. */
export declare function etag(data: string, strategy: string, req: IncomingMessage, res: ServerResponse): boolean;
