import { lazy } from "react"
import { BannerUpdates, BannerUpdatesMobile } from "./updates/banner/BannerUpdates";
import { TitleUpdates, TitleUpdatesMobile } from "./updates/title/TitleUpdates";

export const BannerHome = lazy(() => import('./home/banner/BannerHome'));
export const CarouselHome = lazy(() => import('./home/carousel/CarouselHome'));
export const SectionNews = lazy(() => import('./home/news/sectionNews'));
export const SectionFrequentQuestions = lazy(() => import ('./home/frequentQuestions/sectionFrequentQuestions'));
export const UpdatesSections = lazy(() => import('./updates/sections/UpdatesSections'));
export const DownloadFiles = lazy(()=> import('./updates/downloadFiles/DownloadFiles'))
export const TitleLicenses = lazy(() => import('./licenses/title/TitleLicenses'));
export const LicensesFirstSection = lazy(() => import('./licenses/licensesSection1/LicensesFirstSection'));
export const LicensesSecondSection = lazy(() => import('./licenses/licensesSection2/LicensesSecondSection'));
export const FormContact = lazy(() => import('./contact/form/FormContact'));
export { BannerUpdates, BannerUpdatesMobile };
export { TitleUpdates, TitleUpdatesMobile };
