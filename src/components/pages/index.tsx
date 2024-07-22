import { lazy } from "react"

export const BannerHome = lazy(() => import('./home/banner/BannerHome'));
export const CarouselHome = lazy(() => import('./home/carousel/CarouselHome'));
export const SectionNews = lazy(() => import('./home/news/sectionNews'));
export const SectionFrequentQuestions = lazy(() => import ('./home/frequentQuestions/sectionFrequentQuestions'))