/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async (event) => {
    const token = event.headers.Authorization;
    const parts = token.split(".");

    if (parts.length !== 3) {
        return {
            statusCode: 400, // Bad Request
            body: "Token structure is not valid",
        };
    }

    // Decode the payload
    const payload = parts[1];
    const decoded = Buffer.from(payload, "base64").toString("utf-8");

    // Parse JSON
    const jsonPayload = JSON.parse(decoded);

    // Check the value of custom:VODAccess
    if (jsonPayload["custom:VODAccess"] === "yes") {
        // Check for 'yes' instead of 'no'
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            body: "Access granted",
        };
    } else if (
        jsonPayload["custom:VODAccess"] === "no" ||
        jsonPayload["custom:VODAccess"] === "" ||
        !jsonPayload.hasOwnProperty("custom:VODAccess")
    ) {
        // Explicitly check for 'no'
        return {
            statusCode: 200, // Forbidden
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            body: "Access Denied.",
        };
    } else {
        // Catch-all for other scenarios
        return {
            statusCode: 500, // Server error
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            body: "Some other problem",
        };
    }
};
