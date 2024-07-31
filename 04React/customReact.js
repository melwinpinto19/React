function render(parent, child) {
  const parentEle = document.createElement(child.type);

  for (const [key, value] of Object.entries(child.props)) {
    parentEle.setAttribute(key, value);
  }

  for (const each of child.children) {
    const ele = document.createElement(each.type);

    for (const [key, value] of Object.entries(each.props)) {
      ele.setAttribute(key, value);
    }

    ele.innerHTML = each.childern[0];

    parentEle.append(ele);
  }

  parent.append(parentEle);
}

// React element:
const reactElement = {
  type: "div",
  props: {
    class: "box",
    style: "color:red;height:100px;width:100px;background:yellow",
  },
  children: [
    {
      type: "a",
      props: {
        class: "link",
        target: "_blank",
        href: "https://google.com",
        style: "text-decoration:none",
      },
      childern: ["click here"],
    },
    {
      type: "br",
      props: {},
      childern: [""],
    },
    {
      type: "a",
      props: {
        class: "link",
        target: "_blank",
        href: "https://google.com",
        style: "text-decoration:none",
      },
      childern: ["click here"],
    },
  ],
};

const ele = document.querySelector("#root");

render(ele, reactElement);
