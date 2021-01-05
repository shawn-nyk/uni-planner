import React from "react";
import "./ModuleCollection.css";
import Module from "./Module";

class modCollection extends React.Component {
  state = {
  //   mcCountsImmutable: [
  //     {
  //       category:"ulr",
  //       count:20
  //     }, {
  //       category:"foundation",
  //       count:36
  //     }, {
  //       category:"itp",
  //       count:12
  //     }, {
  //       category:"mns",
  //       count:16
  //     }, {
  //       category:"ue",
  //       count:32
  //     }
  //   ],

  //   mcCounts: [
  //     {
  //       category:"foundation",
  //       count:0
  //     }, {
  //       category:"itp",
  //       count:0
  //     }
  //   ],

    modsImmutable: [
      { // university level requirements
        name:"GER",
        category:"ulr",
        mcs:4
      }, {
        name:"GEQ",
        category:"ulr",
        mcs:4
      }, {
        name:"GEH",
        category:"ulr",
        mcs:4
      }, {
        name:"GES",
        category:"ulr",
        mcs:4
      }, {
        name:"GET",
        category:"ulr",
        mcs:4
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4
      }, {
        name:"USP",
        category:"ulr",
        mcs:4
      }, {
        name:"USP",
        category:"ulr",
        mcs:4
      }, {
        name:"USP",
        category:"ulr",
        mcs:4
      }, {
        name:"USP",
        category:"ulr",
        mcs:4
      }, { // foundation
        name:"CS1101S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS1231S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2030",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2040S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2100",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2103T",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2105",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2106",
        category:"foundation",
        mcs:4
      }, {
        name:"CS3230",
        category:"foundation",
        mcs:4
      }, { // IT professionalism
        name:"IS1103",
        category:"itp",
        mcs:4
      }, {
        name:"CS2101",
        category:"itp",
        mcs:4
      }, {
        name:"ES2660",
        category:"itp",
        mcs:4
      }, { // math and science
        name:"MA1521",
        category:"mns",
        mcs:4
      }, {
        name:"MA1101R",
        category:"mns",
        mcs:4
      }, {
        name:"ST2334",
        category:"mns",
        mcs:4
      }, {
        name:"Science",
        category:"mns",
        mcs:4
      }, { // unrestricted electives
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, { // algorithms and theory
        name:"CS3230",
        category:"algo",
        mcs:4
      }, {
        name:"CS3236",
        category:"algo",
        mcs:4
      }, {
        name:"CS4231",
        category:"algo",
        mcs:4
      }, {
        name:"CS4232",
        category:"algo",
        mcs:4
      }, {
        name:"CS4234",
        category:"algo",
        mcs:4
      }, {
        name:"CS3233",
        category:"algo",
        mcs:4
      }, {
        name:"CS4257",
        category:"algo",
        mcs:4
      }, {
        name:"CS4261",
        category:"algo",
        mcs:4
      }, {
        name:"CS4268",
        category:"algo",
        mcs:4
      }, {
        name:"CS4269",
        category:"algo",
        mcs:4
      }, {
        name:"CS4330",
        category:"algo",
        mcs:4
      }, {
        name:"CS5230",
        category:"algo",
        mcs:4
      }, {
        name:"CS5234",
        category:"algo",
        mcs:4
      }, {
        name:"CS5236",
        category:"algo",
        mcs:4
      }, {
        name:"CS5237",
        category:"algo",
        mcs:4
      }, {
        name:"CS5238",
        category:"algo",
        mcs:4
      }, {
        name:"CS5330",
        category:"algo",
        mcs:4
      }, { // AI
        name:"CS3243",
        category:"ai",
        mcs:4
      }, {
        name:"CS3244",
        category:"ai",
        mcs:4
      }, {
        name:"CS4243",
        category:"ai",
        mcs:4
      }, {
        name:"CS4244",
        category:"ai",
        mcs:4
      }, {
        name:"CS4246",
        category:"ai",
        mcs:4
      }, {
        name:"CS4248",
        category:"ai",
        mcs:4
      }, {
        name:"CS4220",
        category:"ai",
        mcs:4
      }, {
        name:"CS4261",
        category:"ai",
        mcs:4
      }, {
        name:"CS4269",
        category:"ai",
        mcs:4
      }, {
        name:"CS4277",
        category:"ai",
        mcs:4
      }, {
        name:"CS4278",
        category:"ai",
        mcs:4
      }, {
        name:"CS5215",
        category:"ai",
        mcs:4
      }, {
        name:"CS5228",
        category:"ai",
        mcs:4
      }, {
        name:"CS5242",
        category:"ai",
        mcs:4
      }, {
        name:"CS5260",
        category:"ai",
        mcs:4
      }, {
        name:"CS5340",
        category:"ai",
        mcs:4
      }, {
        name:"CS5339",
        category:"ai",
        mcs:4
      }, { // computer graphics and games
        name:"CS3241",
        category:"graphics",
        mcs:4
      }, {
        name:"CS3242",
        category:"graphics",
        mcs:4
      }, {
        name:"CS3247",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4247",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4350",
        category:"graphics",
        mcs:4
      }, {
        name:"CS3218",
        category:"graphics",
        mcs:4
      }, {
        name:"CS3240",
        category:"graphics",
        mcs:4
      }, {
        name:"CS3249",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4240",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4243",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4249",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4351",
        category:"graphics",
        mcs:4
      }, {
        name:"CS5237",
        category:"graphics",
        mcs:4
      }, {
        name:"CS5240",
        category:"graphics",
        mcs:4
      }, {
        name:"CS5343",
        category:"graphics",
        mcs:4
      }, {
        name:"CS5346",
        category:"graphics",
        mcs:4
      }, { // computer security
        name:"CS2107",
        category:"sec",
        mcs:4
      }, {
        name:"CS3235",
        category:"sec",
        mcs:4
      }, {
        name:"CS4236",
        category:"sec",
        mcs:4
      }, {
        name:"CS4238",
        category:"sec",
        mcs:4
      }, {
        name:"CS4239",
        category:"sec",
        mcs:4
      }, {
        name:"CS3221",
        category:"sec",
        mcs:4
      }, {
        name:"CS4257",
        category:"sec",
        mcs:4
      }, {
        name:"CS4276",
        category:"sec",
        mcs:4
      }, {
        name:"CS5231",
        category:"sec",
        mcs:4
      }, {
        name:"CS5250",
        category:"sec",
        mcs:4
      }, {
        name:"CS5321",
        category:"sec",
        mcs:4
      }, {
        name:"CS5322",
        category:"sec",
        mcs:4
      }, {
        name:"CS5331",
        category:"sec",
        mcs:4
      }, {
        name:"CS5332",
        category:"sec",
        mcs:4
      }, {
        name:"IFS4101",
        category:"sec",
        mcs:4
      }, {
        name:"IFS4102",
        category:"sec",
        mcs:4
      }, {
        name:"IFS4103",
        category:"sec",
        mcs:4
      }, { // database systems
        name:"CS2102",
        category:"db",
        mcs:4
      }, {
        name:"CS3223",
        category:"db",
        mcs:4
      }, {
        name:"CS4221",
        category:"db",
        mcs:4
      }, {
        name:"CS4224",
        category:"db",
        mcs:4
      }, {
        name:"CS4225",
        category:"db",
        mcs:4
      }, {
        name:"CS4220",
        category:"db",
        mcs:4
      }, {
        name:"CS5226",
        category:"db",
        mcs:4
      }, {
        name:"CS5228",
        category:"db",
        mcs:4
      }, {
        name:"CS5322",
        category:"db",
        mcs:4
      }, { // multimedia information retrieval
        name:"CS2108",
        category:"ir",
        mcs:4
      }, {
        name:"CS3245",
        category:"ir",
        mcs:4
      }, {
        name:"CS4242",
        category:"ir",
        mcs:4
      }, {
        name:"CS4248",
        category:"ir",
        mcs:4
      }, {
        name:"CS4347",
        category:"ir",
        mcs:4
      }, {
        name:"CS5246",
        category:"ir",
        mcs:4
      }, {
        name:"CS5241",
        category:"ir",
        mcs:4
      }, { // networking and distributed systems
        name:"CS2105",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS3103",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS4222",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS4226",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS4231",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS3237",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS4344",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS5223",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS5224",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS5229",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS5248",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS5321",
        category:"ntwk",
        mcs:4
      }, { // parallel computing
        name:"CS3210",
        category:"para",
        mcs:4
      }, {
        name:"CS3211",
        category:"para",
        mcs:4
      }, {
        name:"CS4231",
        category:"para",
        mcs:4
      }, {
        name:"CS4223",
        category:"para",
        mcs:4
      }, {
        name:"CS5222",
        category:"para",
        mcs:4
      }, {
        name:"CS5223",
        category:"para",
        mcs:4
      }, {
        name:"CS5224",
        category:"para",
        mcs:4
      }, {
        name:"CS5239",
        category:"para",
        mcs:4
      }, {
        name:"CS5250",
        category:"para",
        mcs:4
      }, { // programming languages
        name:"CS2104",
        category:"lang",
        mcs:4
      }, {
        name:"CS3211",
        category:"lang",
        mcs:4
      }, {
        name:"CS4212",
        category:"lang",
        mcs:4
      }, {
        name:"CS4215",
        category:"lang",
        mcs:4
      }, {
        name:"CS3234",
        category:"lang",
        mcs:4
      }, {
        name:"CS4216",
        category:"lang",
        mcs:4
      }, {
        name:"CS5232",
        category:"lang",
        mcs:4
      }, {
        name:"CS5214",
        category:"lang",
        mcs:4
      }, {
        name:"CS5215",
        category:"lang",
        mcs:4
      }, {
        name:"CS5218",
        category:"lang",
        mcs:4
      }, { // software engineering
        name:"CS2103T",
        category:"se",
        mcs:4
      }, {
        name:"CS3219",
        category:"se",
        mcs:4
      }, {
        name:"CS4211",
        category:"se",
        mcs:4
      }, {
        name:"CS4218",
        category:"se",
        mcs:4
      }, {
        name:"CS4239",
        category:"se",
        mcs:4
      }, {
        name:"CS3216",
        category:"se",
        mcs:4
      }, {
        name:"CS3217",
        category:"se",
        mcs:4
      }, {
        name:"CS3226",
        category:"se",
        mcs:4
      }, {
        name:"CS3234",
        category:"se",
        mcs:4
      }, {
        name:"CS5219",
        category:"se",
        mcs:4
      }, {
        name:"CS5232",
        category:"se",
        mcs:4
      }, {
        name:"CS5272",
        category:"se",
        mcs:4
      }, { // other breath and depth
        name:"CS2220",
        category:"othbnd",
        mcs:4
      }, {
        name:"CS5233",
        category:"othbnd",
        mcs:4
      }, { // team project
        name:"CS3203",
        category:"tp",
        mcs:4
      }, {
        name:"CS3203",
        category:"tp",
        mcs:4
      }, {
        name:"CS3216",
        category:"tp",
        mcs:5
      }, {
        name:"CS3217",
        category:"tp",
        mcs:5
      }, {
        name:"CS3281",
        category:"tp",
        mcs:4
      }, {
        name:"CS3282",
        category:"tp",
        mcs:4
      }, {
        name:"CS3283",
        category:"tp",
        mcs:4
      }, {
        name:"CS3284",
        category:"tp",
        mcs:4
      }
    ],

    mods: [
      { // university level requirements
        name:"GER",
        category:"ulr",
        mcs:4
      }, {
        name:"GEQ",
        category:"ulr",
        mcs:4
      }, {
        name:"GEH",
        category:"ulr",
        mcs:4
      }, {
        name:"GES",
        category:"ulr",
        mcs:4
      }, {
        name:"GET",
        category:"ulr",
        mcs:4
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4
      }, {
        name:"USP",
        category:"ulr",
        mcs:4
      }, {
        name:"USP",
        category:"ulr",
        mcs:4
      }, {
        name:"USP",
        category:"ulr",
        mcs:4
      }, {
        name:"USP",
        category:"ulr",
        mcs:4
      }, { // foundation
        name:"CS1101S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS1231S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2030",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2040S",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2100",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2103T",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2105",
        category:"foundation",
        mcs:4
      }, {
        name:"CS2106",
        category:"foundation",
        mcs:4
      }, {
        name:"CS3230",
        category:"foundation",
        mcs:4
      }, { // IT professionalism
        name:"IS1103",
        category:"itp",
        mcs:4
      }, {
        name:"CS2101",
        category:"itp",
        mcs:4
      }, {
        name:"ES2660",
        category:"itp",
        mcs:4
      }, { // math and science
        name:"MA1521",
        category:"mns",
        mcs:4
      }, {
        name:"MA1101R",
        category:"mns",
        mcs:4
      }, {
        name:"ST2334",
        category:"mns",
        mcs:4
      }, {
        name:"Science",
        category:"mns",
        mcs:4
      }, { // unrestricted electives
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, {
        name:"UE",
        category:"ue",
        mcs:4
      }, { // algorithms and theory
        name:"CS3230",
        category:"algo",
        mcs:4
      }, {
        name:"CS3236",
        category:"algo",
        mcs:4
      }, {
        name:"CS4231",
        category:"algo",
        mcs:4
      }, {
        name:"CS4232",
        category:"algo",
        mcs:4
      }, {
        name:"CS4234",
        category:"algo",
        mcs:4
      }, {
        name:"CS3233",
        category:"algo",
        mcs:4
      }, {
        name:"CS4257",
        category:"algo",
        mcs:4
      }, {
        name:"CS4261",
        category:"algo",
        mcs:4
      }, {
        name:"CS4268",
        category:"algo",
        mcs:4
      }, {
        name:"CS4269",
        category:"algo",
        mcs:4
      }, {
        name:"CS4330",
        category:"algo",
        mcs:4
      }, {
        name:"CS5230",
        category:"algo",
        mcs:4
      }, {
        name:"CS5234",
        category:"algo",
        mcs:4
      }, {
        name:"CS5236",
        category:"algo",
        mcs:4
      }, {
        name:"CS5237",
        category:"algo",
        mcs:4
      }, {
        name:"CS5238",
        category:"algo",
        mcs:4
      }, {
        name:"CS5330",
        category:"algo",
        mcs:4
      }, { // AI
        name:"CS3243",
        category:"ai",
        mcs:4
      }, {
        name:"CS3244",
        category:"ai",
        mcs:4
      }, {
        name:"CS4243",
        category:"ai",
        mcs:4
      }, {
        name:"CS4244",
        category:"ai",
        mcs:4
      }, {
        name:"CS4246",
        category:"ai",
        mcs:4
      }, {
        name:"CS4248",
        category:"ai",
        mcs:4
      }, {
        name:"CS4220",
        category:"ai",
        mcs:4
      }, {
        name:"CS4261",
        category:"ai",
        mcs:4
      }, {
        name:"CS4269",
        category:"ai",
        mcs:4
      }, {
        name:"CS4277",
        category:"ai",
        mcs:4
      }, {
        name:"CS4278",
        category:"ai",
        mcs:4
      }, {
        name:"CS5215",
        category:"ai",
        mcs:4
      }, {
        name:"CS5228",
        category:"ai",
        mcs:4
      }, {
        name:"CS5242",
        category:"ai",
        mcs:4
      }, {
        name:"CS5260",
        category:"ai",
        mcs:4
      }, {
        name:"CS5340",
        category:"ai",
        mcs:4
      }, {
        name:"CS5339",
        category:"ai",
        mcs:4
      }, { // computer graphics and games
        name:"CS3241",
        category:"graphics",
        mcs:4
      }, {
        name:"CS3242",
        category:"graphics",
        mcs:4
      }, {
        name:"CS3247",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4247",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4350",
        category:"graphics",
        mcs:4
      }, {
        name:"CS3218",
        category:"graphics",
        mcs:4
      }, {
        name:"CS3240",
        category:"graphics",
        mcs:4
      }, {
        name:"CS3249",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4240",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4243",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4249",
        category:"graphics",
        mcs:4
      }, {
        name:"CS4351",
        category:"graphics",
        mcs:4
      }, {
        name:"CS5237",
        category:"graphics",
        mcs:4
      }, {
        name:"CS5240",
        category:"graphics",
        mcs:4
      }, {
        name:"CS5343",
        category:"graphics",
        mcs:4
      }, {
        name:"CS5346",
        category:"graphics",
        mcs:4
      }, { // computer security
        name:"CS2107",
        category:"sec",
        mcs:4
      }, {
        name:"CS3235",
        category:"sec",
        mcs:4
      }, {
        name:"CS4236",
        category:"sec",
        mcs:4
      }, {
        name:"CS4238",
        category:"sec",
        mcs:4
      }, {
        name:"CS4239",
        category:"sec",
        mcs:4
      }, {
        name:"CS3221",
        category:"sec",
        mcs:4
      }, {
        name:"CS4257",
        category:"sec",
        mcs:4
      }, {
        name:"CS4276",
        category:"sec",
        mcs:4
      }, {
        name:"CS5231",
        category:"sec",
        mcs:4
      }, {
        name:"CS5250",
        category:"sec",
        mcs:4
      }, {
        name:"CS5321",
        category:"sec",
        mcs:4
      }, {
        name:"CS5322",
        category:"sec",
        mcs:4
      }, {
        name:"CS5331",
        category:"sec",
        mcs:4
      }, {
        name:"CS5332",
        category:"sec",
        mcs:4
      }, {
        name:"IFS4101",
        category:"sec",
        mcs:4
      }, {
        name:"IFS4102",
        category:"sec",
        mcs:4
      }, {
        name:"IFS4103",
        category:"sec",
        mcs:4
      }, { // database systems
        name:"CS2102",
        category:"db",
        mcs:4
      }, {
        name:"CS3223",
        category:"db",
        mcs:4
      }, {
        name:"CS4221",
        category:"db",
        mcs:4
      }, {
        name:"CS4224",
        category:"db",
        mcs:4
      }, {
        name:"CS4225",
        category:"db",
        mcs:4
      }, {
        name:"CS4220",
        category:"db",
        mcs:4
      }, {
        name:"CS5226",
        category:"db",
        mcs:4
      }, {
        name:"CS5228",
        category:"db",
        mcs:4
      }, {
        name:"CS5322",
        category:"db",
        mcs:4
      }, { // multimedia information retrieval
        name:"CS2108",
        category:"ir",
        mcs:4
      }, {
        name:"CS3245",
        category:"ir",
        mcs:4
      }, {
        name:"CS4242",
        category:"ir",
        mcs:4
      }, {
        name:"CS4248",
        category:"ir",
        mcs:4
      }, {
        name:"CS4347",
        category:"ir",
        mcs:4
      }, {
        name:"CS5246",
        category:"ir",
        mcs:4
      }, {
        name:"CS5241",
        category:"ir",
        mcs:4
      }, { // networking and distributed systems
        name:"CS2105",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS3103",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS4222",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS4226",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS4231",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS3237",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS4344",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS5223",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS5224",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS5229",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS5248",
        category:"ntwk",
        mcs:4
      }, {
        name:"CS5321",
        category:"ntwk",
        mcs:4
      }, { // parallel computing
        name:"CS3210",
        category:"para",
        mcs:4
      }, {
        name:"CS3211",
        category:"para",
        mcs:4
      }, {
        name:"CS4231",
        category:"para",
        mcs:4
      }, {
        name:"CS4223",
        category:"para",
        mcs:4
      }, {
        name:"CS5222",
        category:"para",
        mcs:4
      }, {
        name:"CS5223",
        category:"para",
        mcs:4
      }, {
        name:"CS5224",
        category:"para",
        mcs:4
      }, {
        name:"CS5239",
        category:"para",
        mcs:4
      }, {
        name:"CS5250",
        category:"para",
        mcs:4
      }, { // programming languages
        name:"CS2104",
        category:"lang",
        mcs:4
      }, {
        name:"CS3211",
        category:"lang",
        mcs:4
      }, {
        name:"CS4212",
        category:"lang",
        mcs:4
      }, {
        name:"CS4215",
        category:"lang",
        mcs:4
      }, {
        name:"CS3234",
        category:"lang",
        mcs:4
      }, {
        name:"CS4216",
        category:"lang",
        mcs:4
      }, {
        name:"CS5232",
        category:"lang",
        mcs:4
      }, {
        name:"CS5214",
        category:"lang",
        mcs:4
      }, {
        name:"CS5215",
        category:"lang",
        mcs:4
      }, {
        name:"CS5218",
        category:"lang",
        mcs:4
      }, { // software engineering
        name:"CS2103T",
        category:"se",
        mcs:4
      }, {
        name:"CS3219",
        category:"se",
        mcs:4
      }, {
        name:"CS4211",
        category:"se",
        mcs:4
      }, {
        name:"CS4218",
        category:"se",
        mcs:4
      }, {
        name:"CS4239",
        category:"se",
        mcs:4
      }, {
        name:"CS3216",
        category:"se",
        mcs:4
      }, {
        name:"CS3217",
        category:"se",
        mcs:4
      }, {
        name:"CS3226",
        category:"se",
        mcs:4
      }, {
        name:"CS3234",
        category:"se",
        mcs:4
      }, {
        name:"CS5219",
        category:"se",
        mcs:4
      }, {
        name:"CS5232",
        category:"se",
        mcs:4
      }, {
        name:"CS5272",
        category:"se",
        mcs:4
      }, { // other breath and depth
        name:"CS2220",
        category:"othbnd",
        mcs:4
      }, {
        name:"CS5233",
        category:"othbnd",
        mcs:4
      }, { // team project
        name:"CS3203",
        category:"tp",
        mcs:4
      }, {
        name:"CS3203",
        category:"tp",
        mcs:4
      }, {
        name:"CS3216",
        category:"tp",
        mcs:5
      }, {
        name:"CS3217",
        category:"tp",
        mcs:5
      }, {
        name:"CS3281",
        category:"tp",
        mcs:4
      }, {
        name:"CS3282",
        category:"tp",
        mcs:4
      }, {
        name:"CS3283",
        category:"tp",
        mcs:4
      }, {
        name:"CS3284",
        category:"tp",
        mcs:4
      }
    ]
  }

  onModDragHandler(modName) {
    var index = -1;
    for (var i = 0; i < this.state.mods.length; i++) {
      if (this.state.mods[i].name === modName) {
          index = i;
      }
    }

    if (index > -1) {
      this.state.mods.splice(index, 1);
    }
    //console.log(this.state.mods); // DELETE
  }

  // updateStats() {
  //   var total = 0;
  //   console.log(total);
  //   for (var i = 0; i < this.state.mods.length; i++) {
  //     total += parseInt(this.state.mods.mcs);
  //   }
  //   console.log(total);
  // }

  render() {
    const drop = (ev) => {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text"); // data == module name
      ev.target.appendChild(document.getElementById(data));
      var index = -1;
      for (var i = 0; i < this.state.modsImmutable.length; i++) {
        if (this.state.modsImmutable[i].name === data) {
            index = i;
        }
      }
      this.state.mods.push(this.state.modsImmutable[index]);
      //console.log(this.state.mods); // DELETE
    }

    const allowDrop = (ev) => {
      ev.preventDefault();
    }

    var mods = {
      ulr: [],
      ue: [],
      itp: [],
      mns: [],
      foundation: [],
      algo: [],
      ai: [],
      graphics: [],
      sec: [],
      db: [],
      ir: [],
      ntwk: [],
      para: [],
      lang: [],
      se: [],
      othbnd: [],
      tp: []
    }

    this.state.modsImmutable.forEach((m) => {
      var isPresent = false;
      for (var i = 0; i < this.state.mods.length; i++) {
        if (this.state.mods[i].name === m.name) {
          isPresent = true;
          break;
        }
      }

      if (isPresent) {
        mods[m.category].push(
          <div key={m.name} className="mod-slot" onDrop={drop} onDragOver={allowDrop}>
            <Module modName={m.name} modCategory={m.category} onModDragHandler={() => this.onModDragHandler(m.name)}>{m.name}</Module>
          </div>
        );
      } else {
        mods[m.category].push(
          <div key={m.name} className="mod-slot" onDrop={drop} onDragOver={allowDrop}>
          </div>
        );
      }
    });

    return (
      <div className="entire-container">

        <div className="module-collection-container">
          <p>University Level Requirements</p>
          <div className="module-collection-grid" id="ulr-modules">
            {mods.ulr}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Unrestricted Electives</p>
          <div className="module-collection-grid" id="ue-modules">
            {mods.ue}
          </div>
        </div>

        <div className="module-collection-container">
          <p>IT Professionalism</p>
          <div className="module-collection-grid" id="itp-modules">
            {mods.itp}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Math and Science</p>
          <div className="module-collection-grid" id="mns-modules">
            {mods.mns}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Foundation</p>
          <div className="module-collection-grid" id="foundation-modules">
            {mods.foundation}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Team Project</p>
          <div className="module-collection-grid" id="tp-modules">
            {mods.tp}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Algorithms & Theory</p>
          <div className="module-collection-grid" id="algo-modules">
            {mods.algo}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Artificial Intelligence</p>
          <div className="module-collection-grid" id="ai-modules">
            {mods.ai}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Computer Graphics & Games</p>
          <div className="module-collection-grid" id="graphics-modules">
            {mods.graphics}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Computer Security</p>
          <div className="module-collection-grid" id="sec-modules">
            {mods.sec}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Database Systems</p>
          <div className="module-collection-grid" id="db-modules">
            {mods.db}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Multimedia Information Retrieval</p>
          <div className="module-collection-grid" id="ir-modules">
            {mods.ir}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Networking and Distributed Systems</p>
          <div className="module-collection-grid" id="ntwk-modules">
            {mods.ntwk}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Parallel Computing</p>
          <div className="module-collection-grid" id="para-modules">
            {mods.para}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Programming Languages</p>
          <div className="module-collection-grid" id="lang-modules">
            {mods.lang}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Software Engineering</p>
          <div className="module-collection-grid" id="se-modules">
            {mods.se}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Other Breadth & Depth</p>
          <div className="module-collection-grid" id="othbnd-modules">
            {mods.othbnd}
          </div>
        </div>

      </div>
    )
  }
};

export default modCollection;
