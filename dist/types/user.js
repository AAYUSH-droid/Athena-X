"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoles = exports.OAuthProviders = exports.SocialHandleTypes = void 0;
var SocialHandleTypes;
(function (SocialHandleTypes) {
    SocialHandleTypes["facebook"] = "facebook";
    SocialHandleTypes["twitter"] = "twitter";
    SocialHandleTypes["linkedin"] = "linkedin";
    SocialHandleTypes["github"] = "github";
    SocialHandleTypes["instagram"] = "instagram";
    SocialHandleTypes["youtube"] = "youtube";
    SocialHandleTypes["codechef"] = "codechef";
    SocialHandleTypes["codeforces"] = "codeforces";
    SocialHandleTypes["hackerrank"] = "hackerrank";
    SocialHandleTypes["hackerearth"] = "hackerearth";
    SocialHandleTypes["leetcode"] = "leetcode";
    SocialHandleTypes["behance"] = "behance";
    SocialHandleTypes["dribbble"] = "dribbble";
})(SocialHandleTypes || (exports.SocialHandleTypes = SocialHandleTypes = {}));
var OAuthProviders;
(function (OAuthProviders) {
    OAuthProviders["google"] = "google";
    OAuthProviders["github"] = "github";
})(OAuthProviders || (exports.OAuthProviders = OAuthProviders = {}));
var UserRoles;
(function (UserRoles) {
    UserRoles["superAdmin"] = "superAdmin";
    UserRoles["admin"] = "admin";
    UserRoles["manager"] = "manager";
    UserRoles["user"] = "user";
})(UserRoles || (exports.UserRoles = UserRoles = {}));
