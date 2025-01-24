import "./globals.css";
import { ThemeProvider } from './ThemeContext';
import { fontVariables } from './fonts';

export const metadata = {
  title: "Gabriel Yepes",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontVariables} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}