import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t pt-16 lg:pt-0 pb-16 lg:pb-0 mt-0 lg:mt-24 bg-background/95">
      <div className="container flex flex-col lg:flex-row items-center justify-between px-4">
        <div className="flex items-center space-x-2 flex-col lg:flex-row">
          <Image
            src="/ozver-mek.png"
            alt="Özver Mekatronik Logo"
            width={200}
            height={200}
            className="object-contain h-36 lg:h-48 w-auto"
          />
                    <div className="flex items-center space-x-4">
            <div className=" items-center space-x-4 text-sm text-muted-foreground">
              <span className="text-xl font-bold">
                1980&apos;den beri hizmetinizdeyiz..
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between pb-16 lg:pb-0">

          <div className="flex items-center space-x-2">
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              İletişim
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Hakkımızda
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Ürünlerimiz
            </a>
          </div>
          <div className="flex items-center space-x-4 lg:pl-12 pl-0 ">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 Özver Mekatronik</span>
              <span>Tüm hakları saklıdır</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
