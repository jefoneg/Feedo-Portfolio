import CommonConstant from "./common.constant";

export default class ExcludedLinks {
  public static readonly EXCLUDED = new Set<string>([CommonConstant.STRINGS.ACTIVE_STATUS, CommonConstant.STRINGS.LOCATION, CommonConstant.STRINGS.RIGHT_ARROW])
}