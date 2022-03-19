import Paginator from "../Paginator";
import { SectionTitle } from "../StyledComponents";
import OffersGrid from "./OffersGrid";
import { OffersCont } from "./SpecOffStyle";

export default function SpecialOffers() {
    return(
        <OffersCont>
            <SectionTitle>SPECIAL OFFERS</SectionTitle>
            <Paginator>
                <OffersGrid/>
            </Paginator>
        </OffersCont>
    )
}