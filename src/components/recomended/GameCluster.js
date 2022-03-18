import { PriceSml, Available, Cluster, ClusterCont, GameTitle, ImgLg, ImgSml, InfoSection, Tag } from "./RecStyles";

export default function GameCluster() {
  return (
    <ClusterCont>
        <ImgLg src={process.env.PUBLIC_URL + "/images/elden_ring_main.png"} alt="" />
        <InfoSection>
            <GameTitle>ELDEN RING</GameTitle>
            <Cluster>
                <ImgSml src={process.env.PUBLIC_URL + "/images/elden_ring_1.png"} alt="Elden Ring 1" />
                <ImgSml src={process.env.PUBLIC_URL + "/images/elden_ring_2.png"} alt="Elden Ring 2" />
                <ImgSml src={process.env.PUBLIC_URL + "/images/elden_ring_3.png"} alt="Elden Ring 3" />
                <ImgSml src={process.env.PUBLIC_URL + "/images/elden_ring_4.png"} alt="Elden Ring 4" />
            </Cluster>
            <Available>Now Available</Available>
            <Tag>Top Seller</Tag>
            <PriceSml>$59.99</PriceSml>
        </InfoSection>
    </ClusterCont>
  );
}
