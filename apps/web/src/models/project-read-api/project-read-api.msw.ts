/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * PhaseOn API
 * 페이즈온 API 문서
 * OpenAPI spec version: v1
 */
import {
  faker
} from '@faker-js/faker'
import {
  HttpResponse,
  delay,
  http
} from 'msw'
import type {
  ApiResponseAccomplishmentData,
  ApiResponseListReleaseData,
  ApiResponseProjectData,
  ApiResponseProjectLikeResponse,
  ApiResponseProjectPageData,
  ApiResponseProjectTeamData,
  ApiResponseSetProjectCategory
} from '../../types/apis'

export const getGetProjectListResponseMock = (overrideResponse: Partial< ApiResponseProjectPageData > = {}): ApiResponseProjectPageData => ({data: faker.helpers.arrayElement([{category: faker.helpers.arrayElement([faker.helpers.arrayElement(['AI','HEALTHCARE','SOCIAL_EFFECT','EDUCATION','TRAVEL'] as const), undefined]), projects: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({awardCount: faker.number.int({min: undefined, max: undefined}), category: faker.helpers.arrayElements(['AI','HEALTHCARE','SOCIAL_EFFECT','EDUCATION','TRAVEL'] as const), createdAt: faker.helpers.arrayElement([`${faker.date.past().toISOString().split('.')[0]}Z`, undefined]), id: faker.number.int({min: undefined, max: undefined}), likeCount: faker.number.int({min: undefined, max: undefined}), memberCount: faker.number.int({min: undefined, max: undefined}), subTitle: faker.helpers.arrayElement([faker.word.sample(), undefined]), thumbnail: faker.helpers.arrayElement([faker.word.sample(), undefined]), title: faker.word.sample(), viewCount: faker.number.int({min: undefined, max: undefined})})), totalMembers: faker.number.int({min: undefined, max: undefined}), totalProjects: faker.number.int({min: undefined, max: undefined})}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined]), properties: {
        [faker.string.alphanumeric(5)]: {}
      }}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getLikeProjectResponseMock = (overrideResponse: Partial< ApiResponseProjectLikeResponse > = {}): ApiResponseProjectLikeResponse => ({data: faker.helpers.arrayElement([{result: faker.word.sample()}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined]), properties: {
        [faker.string.alphanumeric(5)]: {}
      }}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getGetProjectMembersResponseMock = (overrideResponse: Partial< ApiResponseProjectTeamData > = {}): ApiResponseProjectTeamData => ({data: faker.helpers.arrayElement([{members: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({links: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({linkType: faker.helpers.arrayElement(['GITHUB','LINKEDIN','TWITTER','FACEBOOK','INSTAGRAM','YOUTUBE','BLOG','WEBSITE','OTHER'] as const), url: faker.word.sample()})), username: faker.word.sample(), userPicture: faker.word.sample(), userRole: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample()))})), teamGoal: faker.helpers.arrayElement([faker.word.sample(), undefined])}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined]), properties: {
        [faker.string.alphanumeric(5)]: {}
      }}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getGetProjectDetailResponseMock = (overrideResponse: Partial< ApiResponseProjectData > = {}): ApiResponseProjectData => ({data: faker.helpers.arrayElement([{banner: faker.helpers.arrayElement([faker.word.sample(), undefined]), brandColor: faker.helpers.arrayElement([faker.word.sample(), undefined]), categories: faker.helpers.arrayElements(['AI','HEALTHCARE','SOCIAL_EFFECT','EDUCATION','TRAVEL'] as const), content: faker.word.sample(), createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, id: faker.number.int({min: undefined, max: undefined}), likeCount: faker.number.int({min: undefined, max: undefined}), links: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({link: faker.word.sample(), order: faker.number.int({min: undefined, max: undefined}), type: faker.helpers.arrayElement(['INSTAGRAM','NOTION','GITHUB','GOOGLE_PLAY','APP_STORE','YOUTUBE','WEBSITE','ETC'] as const)})), projectMedia: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({mediaType: faker.helpers.arrayElement(['IMAGE','VIDEO'] as const), order: faker.number.int({min: undefined, max: undefined}), url: faker.word.sample()})), status: faker.word.sample(), subscribeCount: faker.number.int({min: undefined, max: undefined}), subTitle: faker.helpers.arrayElement([faker.word.sample(), undefined]), summary: faker.helpers.arrayElement([faker.word.sample(), undefined]), thumbnail: faker.helpers.arrayElement([faker.word.sample(), undefined]), title: faker.word.sample(), updatedAt: `${faker.date.past().toISOString().split('.')[0]}Z`, viewCount: faker.number.int({min: undefined, max: undefined})}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined]), properties: {
        [faker.string.alphanumeric(5)]: {}
      }}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getGetProjectReleaseResponseMock = (overrideResponse: Partial< ApiResponseListReleaseData > = {}): ApiResponseListReleaseData => ({data: faker.helpers.arrayElement([Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({createdAt: `${faker.date.past().toISOString().split('.')[0]}Z`, description: faker.helpers.arrayElement([faker.word.sample(), undefined]), id: faker.number.int({min: undefined, max: undefined}), title: faker.word.sample()})), undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined]), properties: {
        [faker.string.alphanumeric(5)]: {}
      }}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getGetProjectAccomplishmentsResponseMock = (overrideResponse: Partial< ApiResponseAccomplishmentData > = {}): ApiResponseAccomplishmentData => ({data: faker.helpers.arrayElement([{accomplishmentText: faker.helpers.arrayElement([faker.word.sample(), undefined]), badges: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({awardDate: `${faker.date.past().toISOString().split('.')[0]}Z`, awardDetails: faker.word.sample(), awardName: faker.word.sample(), imageUrl: faker.word.sample(), issuingOrganization: faker.word.sample()})), pressReleases: Array.from({ length: faker.number.int({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => (faker.word.sample()))}, undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined]), properties: {
        [faker.string.alphanumeric(5)]: {}
      }}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})

export const getGetProjectCategoriesResponseMock = (overrideResponse: Partial< ApiResponseSetProjectCategory > = {}): ApiResponseSetProjectCategory => ({data: faker.helpers.arrayElement([faker.helpers.arrayElements(['AI','HEALTHCARE','SOCIAL_EFFECT','EDUCATION','TRAVEL'] as const), undefined]), error: faker.helpers.arrayElement([{code: faker.word.sample(), message: faker.helpers.arrayElement([faker.word.sample(), undefined]), properties: {
        [faker.string.alphanumeric(5)]: {}
      }}, undefined]), success: faker.datatype.boolean(), ...overrideResponse})


export const getGetProjectListMockHandler = (overrideResponse?: ApiResponseProjectPageData | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<ApiResponseProjectPageData> | ApiResponseProjectPageData)) => {
  return http.get('*/api/v1/projects', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProjectListResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getLikeProjectMockHandler = (overrideResponse?: ApiResponseProjectLikeResponse | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Promise<ApiResponseProjectLikeResponse> | ApiResponseProjectLikeResponse)) => {
  return http.post('*/api/v1/projects/:slug/like', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getLikeProjectResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetProjectMembersMockHandler = (overrideResponse?: ApiResponseProjectTeamData | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<ApiResponseProjectTeamData> | ApiResponseProjectTeamData)) => {
  return http.get('*/api/v1/projects/:slug/makers', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProjectMembersResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetProjectDetailMockHandler = (overrideResponse?: ApiResponseProjectData | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<ApiResponseProjectData> | ApiResponseProjectData)) => {
  return http.get('*/api/v1/projects/:slug', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProjectDetailResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetProjectReleaseMockHandler = (overrideResponse?: ApiResponseListReleaseData | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<ApiResponseListReleaseData> | ApiResponseListReleaseData)) => {
  return http.get('*/api/v1/projects/:slug/releases', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProjectReleaseResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetProjectAccomplishmentsMockHandler = (overrideResponse?: ApiResponseAccomplishmentData | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<ApiResponseAccomplishmentData> | ApiResponseAccomplishmentData)) => {
  return http.get('*/api/v1/projects/:slug/accomplishments', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProjectAccomplishmentsResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}

export const getGetProjectCategoriesMockHandler = (overrideResponse?: ApiResponseSetProjectCategory | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Promise<ApiResponseSetProjectCategory> | ApiResponseSetProjectCategory)) => {
  return http.get('*/api/v1/project-categories', async (info) => {await delay(1000);
  
    return new HttpResponse(JSON.stringify(overrideResponse !== undefined 
            ? (typeof overrideResponse === "function" ? await overrideResponse(info) : overrideResponse) 
            : getGetProjectCategoriesResponseMock()),
      { status: 200,
        headers: { 'Content-Type': 'application/json' }
      })
  })
}
export const getReadApiMock = () => [
  getGetProjectListMockHandler(),
  getLikeProjectMockHandler(),
  getGetProjectMembersMockHandler(),
  getGetProjectDetailMockHandler(),
  getGetProjectReleaseMockHandler(),
  getGetProjectAccomplishmentsMockHandler(),
  getGetProjectCategoriesMockHandler()
]
