import { Injectable } from '@angular/core';
import { Sponsor, SponsorTier } from '../types';

const LOREM_IPSUM = 'Details coming soon.';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  private sponsors: Sponsor[] = [
    {
      id: 1,
      name: 'MTC Namibia',
      logoUrl: 'assets/img/sponsors/mtc.png',
      accentColor: '#797979',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: "https://moduscreate.com/"
    },
    {
      id: 2,
      name: 'BI Dynamics Pty Ltd',
      logoUrl: 'assets/img/sponsors/BID.png',
      accentColor: '#797979',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: "https://bi-dynamics.com/"
    },
    {
      id: 3,
      name: 'Schoemans',
      logoUrl: 'assets/img/sponsors/schoemans.png',
      accentColor: '#797979',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: "https://auth0.com/"
    },
    {
      id: 4,
      name: 'NEPC',
      logoUrl: 'assets/img/sponsors/nepc.png',
      accentColor: '#797979',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: "https://nrwl.io/"
    },
    {
      id: 5,
      name: 'Telecom Namibia',
      logoUrl: 'assets/img/sponsors/tn-sponsor.png',
      accentColor: '#797979',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: "https://couchbase.com/"
    },
    {
      id: 6,
      name: 'ICTIH',
      logoUrl: 'assets/img/sponsors/ICTIH.jpg',
      accentColor: '#797979',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: "https://launchpadlab.com/"
    },
    {
      id: 7,
      name: 'NUST',
      logoUrl: 'assets/img/sponsors/nust.jpg',
      accentColor: '#797979',
      tier: SponsorTier.Platinum,
      biography: LOREM_IPSUM,
      homepage: "https://strapi.io/"
    },
    {
      id: 8,
      name: 'AVM',
      logoUrl: 'assets/img/sponsors/avm.png',
      accentColor: '#DAA520',
      tier: SponsorTier.Gold,
      biography: LOREM_IPSUM,
      homepage: "https://vuemastery.com/"
    },
    {
      id: 9,
      name: 'PowerCom',
      logoUrl: 'assets/img/sponsors/powercom.png',
      accentColor: '#f1f1f1',
      tier: SponsorTier.Diamond,
      biography: LOREM_IPSUM,
      homepage: "https://briebug.com/"
    },
    {
      id: 10,
      name: 'HUAWEI',
      logoUrl: 'assets/img/sponsors/huawei2.png',
      accentColor: '#f1f1f1',
      tier: SponsorTier.Diamond,
      biography: LOREM_IPSUM,
      homepage: "https://jnesis.com/"
    },
    {
      id: 11,
      name: 'Green',
      logoUrl: 'assets/img/sponsors/green.png',
      accentColor: '#f1f1f1',
      tier: SponsorTier.Diamond,
      biography: LOREM_IPSUM,
      homepage: "https://hybridmob.com/"
    },
    {
      id: 13,
      name: 'Paratus',
      logoUrl: 'assets/img/sponsors/paratus.png',
      accentColor: '#C0C0C0',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://benovelty.com/"
    },
    {
      id: 14,
      name: 'CRAN',
      logoUrl: 'assets/img/sponsors/cran.png',
      accentColor: '#C0C0C0',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://benovelty.com/"
    },
    {
      id: 15,
      name: 'Dimension Data',
      logoUrl: 'assets/img/sponsors/dimensiondata.png',
      accentColor: '#C0C0C0',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://benovelty.com/"
    },
    {
      id: 16,
      name: 'Salt',
      logoUrl: 'assets/img/sponsors/salt.png',
      accentColor: '#C0C0C0',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://benovelty.com/"
    },
    {
      id: 17,
      name: 'KICT',
      logoUrl: 'assets/img/sponsors/KICT2.jpg',
      accentColor: '#C0C0C0',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://benovelty.com/"
    },
    {
      id: 18,
      name: 'Shine Technologies',
      logoUrl: 'assets/img/sponsors/shinetech.png',
      accentColor: '#C0C0C0',
      tier: SponsorTier.Silver,
      biography: LOREM_IPSUM,
      homepage: "https://benovelty.com/"
    },
  ];

  constructor() {}

  getSponsors(): Sponsor[] {
    return this.sponsors;
  }

  getSponsor(id: number): Sponsor | undefined {
    return this.sponsors.find(sponsor => sponsor.id === id);
  }
}
