/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * PhaseOn API
 * 페이즈온 API 문서
 * OpenAPI spec version: v1
 */
import type { ApiResponseSetProjectCategoryDataItem } from './apiResponseSetProjectCategoryDataItem';
import type { Error } from './error';

export interface ApiResponseSetProjectCategory {
  data?: ApiResponseSetProjectCategoryDataItem[];
  error?: Error;
  success: boolean;
}
