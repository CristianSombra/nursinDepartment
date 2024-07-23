import { lazy } from "react"
import { BannerUpdates, BannerUpdatesMobile } from "./updates/banner/BannerUpdates";
import { TitleUpdates, TitleUpdatesMobile } from "./updates/title/TitleUpdates";

export const BannerHome = lazy(() => import('./home/banner/BannerHome'));
export const CarouselHome = lazy(() => import('./home/carousel/CarouselHome'));
export const SectionNews = lazy(() => import('./home/news/sectionNews'));
export const SectionFrequentQuestions = lazy(() => import ('./home/frequentQuestions/sectionFrequentQuestions'));
export const UpdatesSections = lazy(() => import('./updates/sections/UpdatesSections'));
export { BannerUpdates, BannerUpdatesMobile };
export { TitleUpdates, TitleUpdatesMobile };
