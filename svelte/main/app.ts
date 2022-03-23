// import KredeumNfts from "../components/Global/Tests.svelte";
import KredeumNfts from "../components/Home.svelte";
// import KredeumNftsMint from "../components/NftMint.svelte";
import NetworkSelect from "../components/Network/NetworkSelect.svelte";
import KredeumSelectCollection from "../components/CollectionList/CollectionList.svelte";

type Props = Record<string, string>;
type Attr = { name: string; value: string };

// convert HTML attributes to SVELTE props
// be carefull : attributes are lowercase, props can be mixed case
// filters 'id' and 'class'
const _props = (target: HTMLElement): Props => {
  const props: Props = {};
  Array.from(target?.attributes || []).forEach((attr: Attr): void => {
    let attrName = attr?.name;

    if (attrName === "chainid") {
      attrName = "chainId";
    } else if (attrName === "id" || attrName === "class") {
      attrName = null;
    }

    if (attrName) {
      props[attrName] = attr.value;
    }
  });
  return props;
};

let kredeumNfts: KredeumNfts;
{
  // Kredeum Dapp component
  const target: HTMLElement = document.querySelector("#kredeum-app");
  if (target) {
    kredeumNfts = new KredeumNfts({ target, props: _props(target) });
  }
}

// const kredeumNftsMints: Array<KredeumNftsMint> = [];
// {
//   // Kredeum Mint button components
//   const targets: NodeListOf<HTMLElement> = document.querySelectorAll(".kredeum-nfts-mint");
//   targets?.forEach((target, i) => {
//     kredeumNftsMints[i] = new KredeumNftsMint({
//       target,
//       props: _props(target)
//     });
//   });
// }

let network: NetworkSelect;
{
  // Kredeum Metamask component
  const target: HTMLElement = document.querySelector("#kredeum-metamask");
  if (target) {
    network = new NetworkSelect({ target, props: _props(target) });
  }
}

let kredeumSelectCollection: KredeumSelectCollection;
{
  // Kredeum List Collections component
  const target: HTMLElement = document.querySelector("#kredeum-select-collection");
  if (target) {
    kredeumSelectCollection = new KredeumSelectCollection({
      target,
      props: _props(target)
    });
  }
}

export {
  kredeumNfts,
  // kredeumNftsMints,
  // network,
  kredeumSelectCollection
};
