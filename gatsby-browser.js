import React from "react";




export const onClientEntry = async () => {
	if (typeof IntersectionObserver === "undefined") {
		await import("intersection-observer");
		console.log("IntersectionObserver polyfilled ;)");
	}
}
