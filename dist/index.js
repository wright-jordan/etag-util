import { createHash } from "crypto";
/** Sets cache-control and etag headers. Ends response with status code 304 if etags match. */
export function etag(data, strategy, req, res) {
    res.setHeader("Cache-Control", strategy);
    const oldETag = req.headers["if-none-match"] ?? "";
    const newETag = createHash("sha1").update(data, "utf-8").digest("hex");
    res.setHeader("ETag", newETag);
    if (oldETag === newETag) {
        res.statusCode = 304;
        res.end("");
    }
}
