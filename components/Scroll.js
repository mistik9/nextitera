'use client'
import { usePathname } from "next/navigation";
import React, {useEffect} from "react";

export default function Scroll() {
	const pathname = usePathname().split('/').slice(0, 2).join('/');

	useEffect(() => {
		window.scroll(0, 0);
	}, [pathname]);
	return <></>;
}
