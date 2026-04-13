"use client"

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    // State to store the selected file
    const [file, setfile] = useState(null);

    const submit = async (e) => {
        // Prevent default form submission behaviour
        e.preventDefault();
        console.log(file);

        // Create FormData and attach the selected file
        const data = new FormData();
        data.set('file', file);

        // Send POST request to the upload API
        let result = await fetch("api/upload", {
            method: "POST",
            body: data
        });

        // Parse the JSON response
        result = await result.json(); // fixed: was missing await
        console.log(result);

        if (result.success) {
            alert("File uploaded successfully");
        }
    }

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <Link href="/AddProduct">ADD Products</Link>
                <Link href="/products">Products Table</Link>
            </main>

            <h1>Upload Image</h1>

            <form onSubmit={submit}>
                {/* File input — stores selected file in state */}
                <input
                    type="file"
                    name="file"
                    onChange={(e) => setfile(e.target.files?.[0])}
                />
                <button type="submit">Upload Image</button>
            </form>
        </div>
    );
}