import Image from "next/image";
import Link from "next/link"; // Импортируем Link из next/link для навигации
import homeIcon from "../images/Home2.svg";
import unionIcon from "../images/Union.svg";
import profIcon from "../images/telegram-cloud-photo-size-2-5418192490940464239-y.svg";
import deckIcon from "../images/Union3.svg";
import flykIcon from "../images/Union33.svg";
import palochkakIcon from "../images/Vector 3145.svg";
import strelochkaIcon from "../images/Vector.svg";
import whitelogokaIcon from "../images/Union444.svg";
import cardkIcon from "../images/card1.jpg";
import cardkTwoIcon from "../images/gren.jpg";
import mainIcon from "../images/main.jpg";

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#000000] text-[#FFFFFF] flex flex-col items-center justify-between p-8 overflow-hidden font-bold rounded-[0px]">
      <div className="w-full max-w-[2000px] max-h-[650px] bg-[#0F0F0F] rounded-[50px] p-8 overflow-auto backdrop-blur-lg flex flex-col items-center mt-1 hide-scrollbar">
        <header className="w-full flex justify-center items-center mb-8">
          <div className="flex gap-4">
            <button
              className="px-6 py-2 bg-[#303030] text-[#FFFFFF] rounded-full hover:bg-[#404040] transition backdrop-blur-lg bg-[#00000080] flex items-center gap-2"
            >
              Главная
              <Image src={strelochkaIcon} alt="Главная" width={15} height={15} />
            </button>
            <button
              className="px-6 py-2 bg-[#303030] text-[#FFFFFF] rounded-full hover:bg-[#404040] transition backdrop-blur-lg bg-[#00000080] flex items-center gap-2"
            >
              <Image src={whitelogokaIcon} alt="Поиск" width={20} height={20} />
              Поиск
            </button>
          </div>
        </header>
        <Link href="/card">
          <Image
            src={mainIcon}
            alt="Main Content"
            width={0}
            height={0}
            sizes="1000vw"
            className="w-full max-w-[2800px] h-[900px] object-cover rounded-[40px] cursor-pointer"
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
        </Link>

        <div className="flex justify-start w-full max-w-[1400px] mt-[50px] gap-[50px]">
          <Image
            src={cardkIcon}
            alt="Home"
            width={0}
            height={0}
            sizes="100vw"
            className="w-60 h-80 object-cover rounded-[40px] shadow-lg"
          />
          <Image
            src={cardkTwoIcon}
            alt="Home"
            width={0}
            height={0}
            sizes="100vw"
            className="w-60 h-80 object-cover rounded-[40px] shadow-lg"
          />
        </div>

        <div className="mt-[100px] w-full max-w-[1400px] flex justify-between items-center gap-[100px]">
          <a href="#" className="text-[#FFFFFF] flex items-center text-2xl">
            <Image src={whitelogokaIcon} alt="Главная" width={50} height={50} className="mr-2" />
            GILS
          </a>

          <div className="flex justify-end gap-3">
            <a href="#" className="text-[#FFFFFF99] hover:text-[#FFFFFF] transition">
              <svg width="24" height="24" viewBox="0 0 51 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M39.56 0.394531H47.2434L30.4574 19.5799L50.2048 45.6868H34.7427L22.6323 29.8531L8.77519 45.6868H1.08712L19.0414 25.1659L0.0976562 0.394531H15.9523L26.8991 14.8671L39.56 0.394531ZM36.8634 41.0879H41.1208L13.6389 4.75188H9.07017L36.8634 41.0879Z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>
            <a href="#" className="text-[#FFFFFF99] hover:text-[#FFFFFF] transition">
              <svg width="24" height="24" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M27.3234 0.0585938C12.2289 0.0585938 -0.0078125 12.2953 -0.0078125 27.3898C-0.0078125 40.207 8.81688 50.9624 20.7212 53.9163V35.7422H15.0856V27.3898H20.7212V23.7908C20.7212 14.4884 24.9313 10.1766 34.0643 10.1766C35.796 10.1766 38.7839 10.5166 40.0061 10.8555V18.4262C39.3611 18.3585 38.2405 18.3246 36.8488 18.3246C32.3676 18.3246 30.6359 20.0224 30.6359 24.4358V27.3898H39.5634L38.0295 35.7422H30.6359V54.5209C44.1692 52.8865 54.6556 41.3637 54.6556 27.3898C54.6546 12.2953 42.4178 0.0585938 27.3234 0.0585938Z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>
            <a href="#" className="text-[#FFFFFF99] hover:text-[#FFFFFF] transition">
              <svg width="24" height="24" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M54.7405 27.3898C54.7405 42.4844 42.5039 54.721 27.4093 54.721C12.3147 54.721 0.078125 42.4844 0.078125 27.3898C0.078125 12.2952 12.3147 0.0585938 27.4093 0.0585938C42.5039 0.0585938 54.7405 12.2952 54.7405 27.3898ZM28.3887 20.2357C25.7304 21.3414 20.4174 23.6299 12.4498 27.1013C11.156 27.6158 10.4782 28.1191 10.4165 28.6113C10.3123 29.443 11.3539 29.7705 12.7723 30.2166C12.9652 30.2772 13.1651 30.3401 13.37 30.4067C14.7655 30.8603 16.6427 31.391 17.6186 31.4121C18.5038 31.4312 19.4918 31.0663 20.5825 30.3173C28.0269 25.2921 31.8697 22.7522 32.111 22.6974C32.2812 22.6588 32.517 22.6102 32.6769 22.7522C32.8367 22.8943 32.821 23.1633 32.804 23.2354C32.7008 23.6753 28.6122 27.4765 26.4963 29.4437C25.8366 30.0569 25.3687 30.4919 25.2731 30.5913C25.0588 30.8138 24.8405 31.0243 24.6306 31.2266C23.3342 32.4764 22.3619 33.4136 24.6844 34.9441C25.8005 35.6796 26.6936 36.2878 27.5846 36.8945C28.5576 37.5572 29.5281 38.2181 30.7838 39.0412C31.1038 39.2509 31.4093 39.4687 31.7069 39.6809C32.8393 40.4882 33.8566 41.2135 35.1135 41.0978C35.8438 41.0306 36.5982 40.3439 36.9813 38.2957C37.8867 33.4553 39.6665 22.9677 40.0778 18.646C40.1138 18.2674 40.0685 17.7828 40.0321 17.5701C39.9957 17.3574 39.9196 17.0543 39.6431 16.8299C39.3157 16.5642 38.8101 16.5082 38.584 16.5122C37.5561 16.5303 35.9789 17.0787 28.3887 20.2357Z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>
            <a href="#" className="text-[#FFFFFF99] hover:text-[#FFFFFF] transition">
              <svg width="24" height="24" viewBox="0 0 55 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M54.2819 8.45657C54.2819 8.45657 53.7481 4.68786 52.104 3.03304C50.0221 0.855089 47.6947 0.844412 46.6271 0.716297C38.9829 0.161133 27.5059 0.161133 27.5059 0.161133H27.4846C27.4846 0.161133 16.0076 0.161133 8.36342 0.716297C7.29579 0.844412 4.96837 0.855089 2.8865 3.03304C1.24236 4.68786 0.719227 8.45657 0.719227 8.45657C0.719227 8.45657 0.164062 12.8872 0.164062 17.3072V21.4496C0.164062 25.8695 0.708551 30.3002 0.708551 30.3002C0.708551 30.3002 1.24236 34.0689 2.87583 35.7237C4.9577 37.9017 7.69081 37.8269 8.90791 38.0618C13.2852 38.4782 27.4952 38.6063 27.4952 38.6063C27.4952 38.6063 38.9829 38.5849 46.6271 38.0404C47.6947 37.9123 50.0221 37.9017 52.104 35.7237C53.7481 34.0689 54.2819 30.3002 54.2819 30.3002C54.2819 30.3002 54.8264 25.8802 54.8264 21.4496V17.3072C54.8264 12.8872 54.2819 8.45657 54.2819 8.45657ZM21.8475 26.4781V11.115L36.6128 18.8232L21.8475 26.4781Z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>
            <a href="#" className="text-[#FFFFFF99] hover:text-[#FFFFFF] transition">
              <svg width="24" height="24" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2344_1602)">
                  <path
                    d="M39.1339 0.0585938H29.9216V37.2923C29.9216 41.7288 26.3785 45.3729 21.9693 45.3729C17.56 45.3729 14.0169 41.7288 14.0169 37.2923C14.0169 32.9353 17.4813 29.3702 21.7331 29.2119V19.8638C12.3634 20.0222 4.80469 27.7067 4.80469 37.2923C4.80469 46.9574 12.5209 54.721 22.048 54.721C31.5751 54.721 39.2912 54.721 39.2912 37.2923V18.2001C42.7557 20.7352 47.0074 22.2404 51.4955 22.3197V12.9716C44.5667 12.7339 39.1339 7.03002 39.1339 0.0585938Z"
                    fill="#FFFFFF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2344_1602">
                    <rect width="54.6624" height="54.6624" fill="#FFFFFF" transform="translate(0.25 0.0585938)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="#" className="text-[#FFFFFF99] hover:text-[#FFFFFF] transition">
              <svg width="24" height="24" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2344_1603)">
                  <path
                    d="M14.0033 0.0585938L4.24219 9.81973V44.9598H15.9556V54.721L25.7167 44.9598H33.5256L51.0956 27.3898V0.0585938H14.0033ZM47.1912 25.4375L39.3823 33.2465H31.5734L24.7406 40.0793V33.2465H15.9556V3.96305H47.1912V25.4375Z"
                    fill="#FFFFFF"
                  />
                  <path d="M41.3341 10.7959H37.4297V22.5093H41.3341V10.7959Z" fill="#FFFFFF" />
                  <path d="M30.5959 10.7959H26.6914V22.5093H30.5959V10.7959Z" fill="#FFFFFF" />
                </g>
                <defs>
                  <clipPath id="clip0_2344_1603">
                    <rect width="54.6624" height="54.6624" fill="#FFFFFF" transform="translate(0.335938 0.0585938)" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-[50px] w-full max-w-[1400px] grid grid-cols-6 gap-8">
          <div>
            <h3 className="text-[#FFFFFF] text-lg font-semibold mb-4">GILS</h3>
            <ul className="space-y-2 text-[#FFFFFF99] text-sm">
              <li><a href="#" className="text-[#454545]">Новости</a></li>
              <li><a href="#" className="text-[#454545]">Бег-пир</a></li>
              <li><a href="#" className="text-[#454545]">Скачать GILS</a></li>
              <li><a href="#" className="text-[#454545]">GILS</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFFFFF] text-lg font-semibold mb-4">Deck</h3>
            <ul className="space-y-2 text-[#FFFFFF99] text-sm">
              <li><a href="#" className="text-[#454545]">Скачать Deck</a></li>
              <li><a href="#" className="text-[#454545]">О Deck</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFFFFF] text-lg font-semibold mb-4">Dreamswell</h3>
            <ul className="space-y-2 text-[#FFFFFF99] text-sm">
              <li><a href="#" className="text-[#454545]">Dreamswell SUMMER</a></li>
              <li><a href="#" className="text-[#454545]">Dreamswell WINTER</a></li>
              <li><a href="#" className="text-[#454545]">Мой браслет</a></li>
              <li><a href="#" className="text-[#454545]">Дополнительная информация</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFFFFF] text-lg font-semibold mb-4">GILS STORE</h3>
            <ul className="space-y-2 text-[#FFFFFF99] text-sm">
              <li><a href="#" className="text-[#454545]">Билеты</a></li>
              <li><a href="#" className="text-[#454545]">Мерч от GILS</a></li>
              <li><a href="#" className="text-[#454545]">Мерч Исполнителей</a></li>
              <li><a href="#" className="text-[#454545]">Предметы оформления</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFFFFF] text-lg font-semibold mb-4">Travellers GILS</h3>
            <ul className="space-y-2 text-[#FFFFFF99] text-sm">
              <li><a href="#" className="text-[#454545]">Академия GILS</a></li>
              <li><a href="#" className="text-[#454545]">Работа в GILS</a></li>
              <li><a href="#" className="text-[#454545]">Частые вопросы</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-[#FFFFFF] text-lg font-semibold mb-4">Eco GILS</h3>
            <ul className="space-y-2 text-[#FFFFFF99] text-sm">
              <li><a href="#" className="text-[#454545]">Новости</a></li>
              <li><a href="#" className="text-[#454545]">GREEN MISSION</a></li>
              <li><a href="#" className="text-[#454545]">Eco GILS</a></li>
            </ul>
          </div>
        </div>

        <footer className="w-full py-8 flex justify-center items-center text-[#FFFFFF] text-xl uppercase px-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-2">
              <span>©2025 GILS</span>
              <span className="text-xl">·</span>
              <a href="#" className="hover:text-[#FFFFFF] transition underline">
                УСЛОВИЯ ИСПОЛЬЗОВАНИЯ ВЕБ-САЙТА
              </a>
              <span className="text-xl">·</span>
              <a href="#" className="hover:text-[#FFFFFF] transition underline">
                ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
              </a>
              <span className="text-xl">·</span>
              <a href="#" className="hover:text-[#FFFFFF] transition underline">
                ПРАВИЛА И УСЛОВИЯ
              </a>
            </div>
          </div>
        </footer>
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">
        <nav className="bg-[#3030304D] backdrop-blur-lg backdrop-blur-xl rounded-full px-4 py-1.5 flex items-center gap-6 shadow-xl">
          <a href="#" className="flex flex-col items-center text-[#FFFFFFCC] hover:text-[#FFFFFF] transition">
            <Image src={homeIcon} alt="Home" width={30} height={30} />
          </a>
          <a href="#" className="flex flex-col items-center text-[#FFFFFFCC] hover:text-[#FFFFFF] transition">
            <Image src={palochkakIcon} alt="Home" width={4} height={4} />
          </a>
          <a href="#" className="flex flex-col items-center text-[#FFFFFFCC] hover:text-[#FFFFFF] transition">
            <Image src={unionIcon} alt="Home" width={30} height={30} />
          </a>
          <a href="#" className="flex flex-col items-center text-[#FFFFFFCC] hover:text-[#FFFFFF] transition">
            <Image src={deckIcon} alt="Home" width={50} height={40} />
          </a>
          <a href="#" className="flex flex-col items-center text-[#FFFFFFCC] hover:text-[#FFFFFF] transition">
            <Image src={flykIcon} alt="Home" width={30} height={30} />
          </a>
        </nav>
        <a href="#" className="flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-[#FFFFFF33] flex items-center justify-center">
            <Image src={profIcon} alt="Home" width={30} height={30} />
          </div>
        </a>
      </div>
    </div>
  );
}