import React from "react";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    let tags: string[];
    // const path = usePathname();
    // tags = ["/", "/home"];
    return (
      <html lang="en">
        <body
          className={`antialiased`}
        >
          {/* {path == tags[0] ? <NavbarPage /> : null} */}
          {children}
        </body>
      </html>
    );
  }
  