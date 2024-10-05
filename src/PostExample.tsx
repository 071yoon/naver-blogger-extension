import * as React from "react";

export function PostNotClicked() {
  return (
    <div className="like" ng-if="post.sympathyEnable">
      <div
        className="u_likeit_list_module _reactionModule"
        data-sid="BLOG"
        data-did="BLOG"
        data-cid="znak35_223602627923"
        data-catgid="post"
        data-loaded="1"
        data-facetype="0"
      >
        <a
          href="#"
          className="u_likeit_list_btn _button off"
          role="button"
          data-type="like"
          data-ishiddenzerocount="true"
          aria-pressed="false"
        >
          <span className="u_ico _icon"></span>
          <em className="u_txt _label">공감</em>
          <em className="u_cnt _count">12</em>
        </a>
      </div>
    </div>
  );
}

export function PostClicked() {
  return (
    <div className="like" ng-if="post.sympathyEnable">
      <div
        className="u_likeit_list_module _reactionModule"
        data-sid="BLOG"
        data-did="BLOG"
        data-cid="znak35_223602065241"
        data-catgid="post"
        data-loaded="1"
        data-facetype="0"
      >
        <a
          href="#"
          className="u_likeit_list_btn _button on"
          role="button"
          data-type="like"
          data-ishiddenzerocount="true"
          aria-pressed="true"
        >
          <span className="u_ico _icon"></span>
          <em className="u_txt _label">공감</em>
          <em className="u_cnt _count">13</em>
        </a>
      </div>
    </div>
  );
}
