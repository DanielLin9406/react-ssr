import L from "@loadable/component";
import { Loading } from "../../shared/view/dump/Loading";

export const Loadable = ({ loader }: { loader: any }) => {
  return L(loader, {
    //@ts-ignore
    fallback: <div>Loading...</div>,
  });
};
