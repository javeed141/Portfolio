import satori from "satori";
import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function loadGoogleFont(family, weight) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}`;
  const css = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    },
  }).then((r) => r.text());

  const match = css.match(/src: url\((.+?)\) format\(['"](?:woff2|truetype)['"]\)/);
  if (!match) throw new Error(`Could not find font URL for ${family} ${weight}`);

  return fetch(match[1]).then((r) => r.arrayBuffer());
}

async function generateOGImage() {
  console.log("Downloading fonts...");
  const [fontRegular, fontBold] = await Promise.all([
    loadGoogleFont("Inter", 400),
    loadGoogleFont("Inter", 700),
  ]);

  console.log("Generating OG image...");
  const svg = await satori(
    {
      type: "div",
      props: {
        style: {
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0c0a09",
          fontFamily: "Inter",
        },
        children: [
          // Top-right amber glow
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                position: "absolute",
                top: "-120px",
                right: "-120px",
                width: "450px",
                height: "450px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(245,158,11,0.15) 0%, transparent 70%)",
              },
            },
          },
          // Bottom-left violet glow
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                position: "absolute",
                bottom: "-100px",
                left: "-100px",
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)",
              },
            },
          },
          // Main content container
          {
            type: "div",
            props: {
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              },
              children: [
                // "Available" badge
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 20px",
                      borderRadius: "9999px",
                      border: "1px solid rgba(245,158,11,0.25)",
                      backgroundColor: "rgba(245,158,11,0.06)",
                      fontSize: "15px",
                      color: "#fbbf24",
                    },
                    children: [
                      {
                        type: "div",
                        props: {
                          style: {
                            display: "flex",
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#34d399",
                          },
                        },
                      },
                      "Available for opportunities",
                    ],
                  },
                },
                // Name
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      fontSize: "72px",
                      fontWeight: 700,
                      color: "#ffffff",
                      letterSpacing: "-2px",
                      marginTop: "20px",
                    },
                    children: [
                      "Hi, I'm ",
                      {
                        type: "span",
                        props: {
                          style: { color: "#f59e0b" },
                          children: "Shaik Javeed",
                        },
                      },
                    ],
                  },
                },
                // Designation
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      fontSize: "30px",
                      color: "#a8a29e",
                      fontWeight: 400,
                      marginTop: "8px",
                    },
                    children: "Software Developer",
                  },
                },
                // Description
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      fontSize: "18px",
                      color: "#78716c",
                      fontWeight: 400,
                      maxWidth: "700px",
                      textAlign: "center",
                      lineHeight: "1.6",
                      marginTop: "12px",
                    },
                    children:
                      "Building fast, reliable web applications with modern tools. Passionate about clean code, great UX, and solving real problems.",
                  },
                },
                // Tech stack pills
                {
                  type: "div",
                  props: {
                    style: {
                      display: "flex",
                      gap: "12px",
                      marginTop: "32px",
                    },
                    children: [
                      { label: "React", category: "Frontend" },
                      { label: "Node.js", category: "Backend" },
                      { label: "MongoDB", category: "Database" },
                      { label: "Python", category: "AI/ML" },
                    ].map((item) => ({
                      type: "div",
                      props: {
                        style: {
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 20px",
                          borderRadius: "12px",
                          border: "1px solid rgba(120,113,108,0.3)",
                          backgroundColor: "rgba(28,25,23,0.8)",
                        },
                        children: [
                          {
                            type: "span",
                            props: {
                              style: {
                                fontSize: "11px",
                                fontWeight: 700,
                                color: "#f59e0b",
                                textTransform: "uppercase",
                                letterSpacing: "1px",
                              },
                              children: item.category,
                            },
                          },
                          {
                            type: "span",
                            props: {
                              style: {
                                display: "flex",
                                width: "1px",
                                height: "16px",
                                backgroundColor: "rgba(120,113,108,0.4)",
                              },
                            },
                          },
                          {
                            type: "span",
                            props: {
                              style: {
                                fontSize: "16px",
                                fontWeight: 600,
                                color: "#d6d3d1",
                              },
                              children: item.label,
                            },
                          },
                        ],
                      },
                    })),
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: "Inter", data: fontRegular, weight: 400, style: "normal" },
        { name: "Inter", data: fontBold, weight: 700, style: "normal" },
      ],
    }
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  const outputPath = join(__dirname, "..", "public", "og-image.png");
  writeFileSync(outputPath, png);
  console.log(`OG image generated: ${outputPath} (${(png.length / 1024).toFixed(1)} KB)`);
}

generateOGImage().catch((err) => {
  console.error("Failed to generate OG image:", err);
  process.exit(1);
});
