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
        mcs:4,
        id:"GER"
      }, {
        name:"GEQ",
        category:"ulr",
        mcs:4,
        id:"GEQ"
      }, {
        name:"GEH",
        category:"ulr",
        mcs:4,
        id:"GEH"
      }, {
        name:"GES",
        category:"ulr",
        mcs:4,
        id:"GES"
      }, {
        name:"GET",
        category:"ulr",
        mcs:4,
        id:"GET"
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4,
        id:"UTC1"
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4,
        id:"UTC2"
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4,
        id:"UTC3"
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4,
        id:"UTC4"
      }, {
        name:"USP",
        category:"ulr",
        mcs:4,
        id:"USP1"
      }, {
        name:"USP",
        category:"ulr",
        mcs:4,
        id:"USP2"
      }, {
        name:"USP",
        category:"ulr",
        mcs:4,
        id:"USP3"
      }, {
        name:"USP",
        category:"ulr",
        mcs:4,
        id:"USP4"
      }, { // foundation
        name:"CS1101S",
        category:"foundation",
        mcs:4,
        id:"CS1101S"
      }, {
        name:"CS1231S",
        category:"foundation",
        mcs:4,
        id:"CS1231S"
      }, {
        name:"CS2030",
        category:"foundation",
        mcs:4,
        id:"CS2030"
      }, {
        name:"CS2040S",
        category:"foundation",
        mcs:4,
        id:"CS2040S"
      }, {
        name:"CS2100",
        category:"foundation",
        mcs:4,
        id:"CS2100"
      }, {
        name:"CS2103T",
        category:"foundation",
        mcs:4,
        id:"CS2103Tp1"
      }, {
        name:"CS2105",
        category:"foundation",
        mcs:4,
        id:"CS2105p1"
      }, {
        name:"CS2106",
        category:"foundation",
        mcs:4,
        id:"CS2106"
      }, {
        name:"CS3230",
        category:"foundation",
        mcs:4,
        id:"CS3230p1"
      }, { // IT professionalism
        name:"IS1103",
        category:"itp",
        mcs:4,
        id:"IS1103"
      }, {
        name:"CS2101",
        category:"itp",
        mcs:4,
        id:"CS2101"
      }, {
        name:"ES2660",
        category:"itp",
        mcs:4,
        id:"ES2660"
      }, { // math and science
        name:"MA1521",
        category:"mns",
        mcs:4,
        id:"MA1521"
      }, {
        name:"MA1101R",
        category:"mns",
        mcs:4,
        id:"MA1101R"
      }, {
        name:"ST2334",
        category:"mns",
        mcs:4,
        id:"ST2334"
      }, {
        name:"Science",
        category:"mns",
        mcs:4,
        id:"Science"
      }, { // unrestricted electives
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE1"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE2"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE3"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE4"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE5"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE6"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE7"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE8"
      }, { // algorithms and theory
        name:"CS3230",
        category:"algo",
        mcs:4,
        id:"CS3230p2"
      }, {
        name:"CS3236",
        category:"algo",
        mcs:4,
        id:"CS3236"
      }, {
        name:"CS4231",
        category:"algo",
        mcs:4,
        id:"CS4231p1"
      }, {
        name:"CS4232",
        category:"algo",
        mcs:4,
        id:"CS4232"
      }, {
        name:"CS4234",
        category:"algo",
        mcs:4,
        id:"CS4234"
      }, {
        name:"CS3233",
        category:"algo",
        mcs:4,
        id:"CS3233"
      }, {
        name:"CS4257",
        category:"algo",
        mcs:4,
        id:"CS4257p1"
      }, {
        name:"CS4261",
        category:"algo",
        mcs:4,
        id:"CS4261p1"
      }, {
        name:"CS4268",
        category:"algo",
        mcs:4,
        id:"CS4268"
      }, {
        name:"CS4269",
        category:"algo",
        mcs:4,
        id:"CS4269p1"
      }, {
        name:"CS4330",
        category:"algo",
        mcs:4,
        id:"CS4330"
      }, {
        name:"CS5230",
        category:"algo",
        mcs:4,
        id:"CS5230"
      }, {
        name:"CS5234",
        category:"algo",
        mcs:4,
        id:"CS5234"
      }, {
        name:"CS5236",
        category:"algo",
        mcs:4,
        id:"CS5236"
      }, {
        name:"CS5237",
        category:"algo",
        mcs:4,
        id:"CS5237p1"
      }, {
        name:"CS5238",
        category:"algo",
        mcs:4,
        id:"CS5238"
      }, {
        name:"CS5330",
        category:"algo",
        mcs:4,
        id:"CS5330"
      }, { // AI
        name:"CS3243",
        category:"ai",
        mcs:4,
        id:"CS3243"
      }, {
        name:"CS3244",
        category:"ai",
        mcs:4,
        id:"CS3244"
      }, {
        name:"CS4243",
        category:"ai",
        mcs:4,
        id:"CS4243p1"
      }, {
        name:"CS4244",
        category:"ai",
        mcs:4,
        id:"CS4244"
      }, {
        name:"CS4246",
        category:"ai",
        mcs:4,
        id:"CS4246"
      }, {
        name:"CS4248",
        category:"ai",
        mcs:4,
        id:"CS4248p1"
      }, {
        name:"CS4220",
        category:"ai",
        mcs:4,
        id:"CS4220p1"
      }, {
        name:"CS4261",
        category:"ai",
        mcs:4,
        id:"CS4261p2"
      }, {
        name:"CS4269",
        category:"ai",
        mcs:4,
        id:"CS4269p2"
      }, {
        name:"CS4277",
        category:"ai",
        mcs:4,
        id:"CS4277"
      }, {
        name:"CS4278",
        category:"ai",
        mcs:4,
        id:"CS4278"
      }, {
        name:"CS5215",
        category:"ai",
        mcs:4,
        id:"CS5215p1"
      }, {
        name:"CS5228",
        category:"ai",
        mcs:4,
        id:"CS5228p1"
      }, {
        name:"CS5242",
        category:"ai",
        mcs:4,
        id:"CS5242"
      }, {
        name:"CS5260",
        category:"ai",
        mcs:4,
        id:"CS5260"
      }, {
        name:"CS5340",
        category:"ai",
        mcs:4,
        id:"CS5340"
      }, {
        name:"CS5339",
        category:"ai",
        mcs:4,
        id:"CS5339"
      }, { // computer graphics and games
        name:"CS3241",
        category:"graphics",
        mcs:4,
        id:"CS3241"
      }, {
        name:"CS3242",
        category:"graphics",
        mcs:4,
        id:"CS3242"
      }, {
        name:"CS3247",
        category:"graphics",
        mcs:4,
        id:"CS3247"
      }, {
        name:"CS4247",
        category:"graphics",
        mcs:4,
        id:"CS4247"
      }, {
        name:"CS4350",
        category:"graphics",
        mcs:4,
        id:"CS4350"
      }, {
        name:"CS3218",
        category:"graphics",
        mcs:4,
        id:"CS3218"
      }, {
        name:"CS3240",
        category:"graphics",
        mcs:4,
        id:"CS3240"
      }, {
        name:"CS3249",
        category:"graphics",
        mcs:4,
        id:"CS3249"
      }, {
        name:"CS4240",
        category:"graphics",
        mcs:4,
        id:"CS4240"
      }, {
        name:"CS4243",
        category:"graphics",
        mcs:4,
        id:"CS4243p2"
      }, {
        name:"CS4249",
        category:"graphics",
        mcs:4,
        id:"CS4249"
      }, {
        name:"CS4351",
        category:"graphics",
        mcs:4,
        id:"CS4351"
      }, {
        name:"CS5237",
        category:"graphics",
        mcs:4,
        id:"CS5237p2"
      }, {
        name:"CS5240",
        category:"graphics",
        mcs:4,
        id:"CS5240"
      }, {
        name:"CS5343",
        category:"graphics",
        mcs:4,
        id:"CS5343"
      }, {
        name:"CS5346",
        category:"graphics",
        mcs:4,
        id:"CS5346"
      }, { // computer security
        name:"CS2107",
        category:"sec",
        mcs:4,
        id:"CS2107"
      }, {
        name:"CS3235",
        category:"sec",
        mcs:4,
        id:"CS3235"
      }, {
        name:"CS4236",
        category:"sec",
        mcs:4,
        id:"CS4236"
      }, {
        name:"CS4238",
        category:"sec",
        mcs:4,
        id:"CS4238"
      }, {
        name:"CS4239",
        category:"sec",
        mcs:4,
        id:"CS4239p1"
      }, {
        name:"CS3221",
        category:"sec",
        mcs:4,
        id:"CS3221"
      }, {
        name:"CS4257",
        category:"sec",
        mcs:4,
        id:"CS4257p2"
      }, {
        name:"CS4276",
        category:"sec",
        mcs:4,
        id:"CS4276"
      }, {
        name:"CS5231",
        category:"sec",
        mcs:4,
        id:"CS5231"
      }, {
        name:"CS5250",
        category:"sec",
        mcs:4,
        id:"CS5250p1"
      }, {
        name:"CS5321",
        category:"sec",
        mcs:4,
        id:"CS5321p1"
      }, {
        name:"CS5322",
        category:"sec",
        mcs:4,
        id:"CS5322p1"
      }, {
        name:"CS5331",
        category:"sec",
        mcs:4,
        id:"CS5331"
      }, {
        name:"CS5332",
        category:"sec",
        mcs:4,
        id:"CS5332"
      }, {
        name:"IFS4101",
        category:"sec",
        mcs:4,
        id:"IFS4101"
      }, {
        name:"IFS4102",
        category:"sec",
        mcs:4,
        id:"IFS4102"
      }, {
        name:"IFS4103",
        category:"sec",
        mcs:4,
        id:"IFS4103"
      }, { // database systems
        name:"CS2102",
        category:"db",
        mcs:4,
        id:"CS2102"
      }, {
        name:"CS3223",
        category:"db",
        mcs:4,
        id:"CS3223"
      }, {
        name:"CS4221",
        category:"db",
        mcs:4,
        id:"CS4221"
      }, {
        name:"CS4224",
        category:"db",
        mcs:4,
        id:"CS4224"
      }, {
        name:"CS4225",
        category:"db",
        mcs:4,
        id:"CS4225"
      }, {
        name:"CS4220",
        category:"db",
        mcs:4,
        id:"CS4220p2"
      }, {
        name:"CS5226",
        category:"db",
        mcs:4,
        id:"CS5226"
      }, {
        name:"CS5228",
        category:"db",
        mcs:4,
        id:"CS5228p2"
      }, {
        name:"CS5322",
        category:"db",
        mcs:4,
        id:"CS5322p2"
      }, { // multimedia information retrieval
        name:"CS2108",
        category:"ir",
        mcs:4,
        id:"CS2108"
      }, {
        name:"CS3245",
        category:"ir",
        mcs:4,
        id:"CS3245"
      }, {
        name:"CS4242",
        category:"ir",
        mcs:4,
        id:"CS4242"
      }, {
        name:"CS4248",
        category:"ir",
        mcs:4,
        id:"CS4248p2"
      }, {
        name:"CS4347",
        category:"ir",
        mcs:4,
        id:"CS4347"
      }, {
        name:"CS5246",
        category:"ir",
        mcs:4,
        id:"CS5246"
      }, {
        name:"CS5241",
        category:"ir",
        mcs:4,
        id:"CS5241"
      }, { // networking and distributed systems
        name:"CS2105",
        category:"ntwk",
        mcs:4,
        id:"CS2105p2"
      }, {
        name:"CS3103",
        category:"ntwk",
        mcs:4,
        id:"CS3103"
      }, {
        name:"CS4222",
        category:"ntwk",
        mcs:4,
        id:"CS4222"
      }, {
        name:"CS4226",
        category:"ntwk",
        mcs:4,
        id:"CS4226"
      }, {
        name:"CS4231",
        category:"ntwk",
        mcs:4,
        id:"CS4231p2"
      }, {
        name:"CS3237",
        category:"ntwk",
        mcs:4,
        id:"CS3237"
      }, {
        name:"CS4344",
        category:"ntwk",
        mcs:4,
        id:"CS4344"
      }, {
        name:"CS5223",
        category:"ntwk",
        mcs:4,
        id:"CS5223p1"
      }, {
        name:"CS5224",
        category:"ntwk",
        mcs:4,
        id:"CS5224p1"
      }, {
        name:"CS5229",
        category:"ntwk",
        mcs:4,
        id:"CS5229"
      }, {
        name:"CS5248",
        category:"ntwk",
        mcs:4,
        id:"CS5248"
      }, {
        name:"CS5321",
        category:"ntwk",
        mcs:4,
        id:"CS5321p2"
      }, { // parallel computing
        name:"CS3210",
        category:"para",
        mcs:4,
        id:"CS3210"
      }, {
        name:"CS3211",
        category:"para",
        mcs:4,
        id:"CS3211p1"
      }, {
        name:"CS4231",
        category:"para",
        mcs:4,
        id:"CS4231p3"
      }, {
        name:"CS4223",
        category:"para",
        mcs:4,
        id:"CS4223"
      }, {
        name:"CS5222",
        category:"para",
        mcs:4,
        id:"CS5222"
      }, {
        name:"CS5223",
        category:"para",
        mcs:4,
        id:"CS5223p2"
      }, {
        name:"CS5224",
        category:"para",
        mcs:4,
        id:"CS5224p2"
      }, {
        name:"CS5239",
        category:"para",
        mcs:4,
        id:"CS5239"
      }, {
        name:"CS5250",
        category:"para",
        mcs:4,
        id:"CS5250p2"
      }, { // programming languages
        name:"CS2104",
        category:"lang",
        mcs:4,
        id:"CS2104"
      }, {
        name:"CS3211",
        category:"lang",
        mcs:4,
        id:"CS3211p2"
      }, {
        name:"CS4212",
        category:"lang",
        mcs:4,
        id:"CS4212"
      }, {
        name:"CS4215",
        category:"lang",
        mcs:4,
        id:"CS4215"
      }, {
        name:"CS3234",
        category:"lang",
        mcs:4,
        id:"CS3234p1"
      }, {
        name:"CS4216",
        category:"lang",
        mcs:4,
        id:"CS4216"
      }, {
        name:"CS5232",
        category:"lang",
        mcs:4,
        id:"CS5232p1"
      }, {
        name:"CS5214",
        category:"lang",
        mcs:4,
        id:"CS5214"
      }, {
        name:"CS5215",
        category:"lang",
        mcs:4,
        id:"CS5215p2"
      }, {
        name:"CS5218",
        category:"lang",
        mcs:4,
        id:"CS5218"
      }, { // software engineering
        name:"CS2103T",
        category:"se",
        mcs:4,
        id:"CS2103Tp2"
      }, {
        name:"CS3219",
        category:"se",
        mcs:4,
        id:"CS3219"
      }, {
        name:"CS4211",
        category:"se",
        mcs:4,
        id:"CS4211"
      }, {
        name:"CS4218",
        category:"se",
        mcs:4,
        id:"CS4218"
      }, {
        name:"CS4239",
        category:"se",
        mcs:4,
        id:"CS4239p2"
      }, {
        name:"CS3216",
        category:"se",
        mcs:4,
        id:"CS3216p1"
      }, {
        name:"CS3217",
        category:"se",
        mcs:4,
        id:"CS3217p1"
      }, {
        name:"CS3226",
        category:"se",
        mcs:4,
        id:"CS3226"
      }, {
        name:"CS3234",
        category:"se",
        mcs:4,
        id:"CS3234p2"
      }, {
        name:"CS5219",
        category:"se",
        mcs:4,
        id:"CS5219"
      }, {
        name:"CS5232",
        category:"se",
        mcs:4,
        id:"CS5232p2"
      }, {
        name:"CS5272",
        category:"se",
        mcs:4,
        id:"CS5272"
      }, { // other breath and depth
        name:"CS2220",
        category:"othbnd",
        mcs:4,
        id:"CS2220"
      }, {
        name:"CS5233",
        category:"othbnd",
        mcs:4,
        id:"CS5233"
      }, { // team project
        name:"CS3203",
        category:"tp",
        mcs:4,
        id:"CS3203p1"
      }, {
        name:"CS3203",
        category:"tp",
        mcs:4,
        id:"CS3203p2"
      }, {
        name:"CS3216",
        category:"tp",
        mcs:5,
        id:"CS3216p2"
      }, {
        name:"CS3217",
        category:"tp",
        mcs:5,
        id:"CS3217p2"
      }, {
        name:"CS3281",
        category:"tp",
        mcs:4,
        id:"CS3281"
      }, {
        name:"CS3282",
        category:"tp",
        mcs:4,
        id:"CS3282"
      }, {
        name:"CS3283",
        category:"tp",
        mcs:4,
        id:"CS3283"
      }, {
        name:"CS3284",
        category:"tp",
        mcs:4,
        id:"CS3284"
      }, {
        name:"CP3880",
        category:"ier",
        mcs:4,
        id:"CP3880p1"
      }, {
        name:"CP3880",
        category:"ier",
        mcs:4,
        id:"CP3880p2"
      }, {
        name:"CP3880",
        category:"ier",
        mcs:4,
        id:"CP3880p3"
      }, {
        name:"IS4010",
        category:"ier",
        mcs:4,
        id:"IS4010p1"
      }, {
        name:"IS4010",
        category:"ier",
        mcs:4,
        id:"IS4010p2"
      }, {
        name:"IS4010",
        category:"ier",
        mcs:4,
        id:"IS4010p3"
      }, {
        name:"CP3200",
        category:"ier",
        mcs:6,
        id:"CP3200"
      }, {
        name:"CP3202",
        category:"ier",
        mcs:6,
        id:"CP3202"
      }
    ],

    mods: [
      { // university level requirements
        name:"GER",
        category:"ulr",
        mcs:4,
        id:"GER"
      }, {
        name:"GEQ",
        category:"ulr",
        mcs:4,
        id:"GEQ"
      }, {
        name:"GEH",
        category:"ulr",
        mcs:4,
        id:"GEH"
      }, {
        name:"GES",
        category:"ulr",
        mcs:4,
        id:"GES"
      }, {
        name:"GET",
        category:"ulr",
        mcs:4,
        id:"GET"
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4,
        id:"UTC1"
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4,
        id:"UTC2"
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4,
        id:"UTC3"
      }, {
        name:"UTC",
        category:"ulr",
        mcs:4,
        id:"UTC4"
      }, {
        name:"USP",
        category:"ulr",
        mcs:4,
        id:"USP1"
      }, {
        name:"USP",
        category:"ulr",
        mcs:4,
        id:"USP2"
      }, {
        name:"USP",
        category:"ulr",
        mcs:4,
        id:"USP3"
      }, {
        name:"USP",
        category:"ulr",
        mcs:4,
        id:"USP4"
      }, { // foundation
        name:"CS1101S",
        category:"foundation",
        mcs:4,
        id:"CS1101S"
      }, {
        name:"CS1231S",
        category:"foundation",
        mcs:4,
        id:"CS1231S"
      }, {
        name:"CS2030",
        category:"foundation",
        mcs:4,
        id:"CS2030"
      }, {
        name:"CS2040S",
        category:"foundation",
        mcs:4,
        id:"CS2040S"
      }, {
        name:"CS2100",
        category:"foundation",
        mcs:4,
        id:"CS2100"
      }, {
        name:"CS2103T",
        category:"foundation",
        mcs:4,
        id:"CS2103Tp1"
      }, {
        name:"CS2105",
        category:"foundation",
        mcs:4,
        id:"CS2105p1"
      }, {
        name:"CS2106",
        category:"foundation",
        mcs:4,
        id:"CS2106"
      }, {
        name:"CS3230",
        category:"foundation",
        mcs:4,
        id:"CS3230p1"
      }, { // IT professionalism
        name:"IS1103",
        category:"itp",
        mcs:4,
        id:"IS1103"
      }, {
        name:"CS2101",
        category:"itp",
        mcs:4,
        id:"CS2101"
      }, {
        name:"ES2660",
        category:"itp",
        mcs:4,
        id:"ES2660"
      }, { // math and science
        name:"MA1521",
        category:"mns",
        mcs:4,
        id:"MA1521"
      }, {
        name:"MA1101R",
        category:"mns",
        mcs:4,
        id:"MA1101R"
      }, {
        name:"ST2334",
        category:"mns",
        mcs:4,
        id:"ST2334"
      }, {
        name:"Science",
        category:"mns",
        mcs:4,
        id:"Science"
      }, { // unrestricted electives
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE1"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE2"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE3"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE4"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE5"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE6"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE7"
      }, {
        name:"UE",
        category:"ue",
        mcs:4,
        id:"UE8"
      }, { // algorithms and theory
        name:"CS3230",
        category:"algo",
        mcs:4,
        id:"CS3230p2"
      }, {
        name:"CS3236",
        category:"algo",
        mcs:4,
        id:"CS3236"
      }, {
        name:"CS4231",
        category:"algo",
        mcs:4,
        id:"CS4231p1"
      }, {
        name:"CS4232",
        category:"algo",
        mcs:4,
        id:"CS4232"
      }, {
        name:"CS4234",
        category:"algo",
        mcs:4,
        id:"CS4234"
      }, {
        name:"CS3233",
        category:"algo",
        mcs:4,
        id:"CS3233"
      }, {
        name:"CS4257",
        category:"algo",
        mcs:4,
        id:"CS4257p1"
      }, {
        name:"CS4261",
        category:"algo",
        mcs:4,
        id:"CS4261p1"
      }, {
        name:"CS4268",
        category:"algo",
        mcs:4,
        id:"CS4268"
      }, {
        name:"CS4269",
        category:"algo",
        mcs:4,
        id:"CS4269p1"
      }, {
        name:"CS4330",
        category:"algo",
        mcs:4,
        id:"CS4330"
      }, {
        name:"CS5230",
        category:"algo",
        mcs:4,
        id:"CS5230"
      }, {
        name:"CS5234",
        category:"algo",
        mcs:4,
        id:"CS5234"
      }, {
        name:"CS5236",
        category:"algo",
        mcs:4,
        id:"CS5236"
      }, {
        name:"CS5237",
        category:"algo",
        mcs:4,
        id:"CS5237p1"
      }, {
        name:"CS5238",
        category:"algo",
        mcs:4,
        id:"CS5238"
      }, {
        name:"CS5330",
        category:"algo",
        mcs:4,
        id:"CS5330"
      }, { // AI
        name:"CS3243",
        category:"ai",
        mcs:4,
        id:"CS3243"
      }, {
        name:"CS3244",
        category:"ai",
        mcs:4,
        id:"CS3244"
      }, {
        name:"CS4243",
        category:"ai",
        mcs:4,
        id:"CS4243p1"
      }, {
        name:"CS4244",
        category:"ai",
        mcs:4,
        id:"CS4244"
      }, {
        name:"CS4246",
        category:"ai",
        mcs:4,
        id:"CS4246"
      }, {
        name:"CS4248",
        category:"ai",
        mcs:4,
        id:"CS4248p1"
      }, {
        name:"CS4220",
        category:"ai",
        mcs:4,
        id:"CS4220p1"
      }, {
        name:"CS4261",
        category:"ai",
        mcs:4,
        id:"CS4261p2"
      }, {
        name:"CS4269",
        category:"ai",
        mcs:4,
        id:"CS4269p2"
      }, {
        name:"CS4277",
        category:"ai",
        mcs:4,
        id:"CS4277"
      }, {
        name:"CS4278",
        category:"ai",
        mcs:4,
        id:"CS4278"
      }, {
        name:"CS5215",
        category:"ai",
        mcs:4,
        id:"CS5215p1"
      }, {
        name:"CS5228",
        category:"ai",
        mcs:4,
        id:"CS5228p1"
      }, {
        name:"CS5242",
        category:"ai",
        mcs:4,
        id:"CS5242"
      }, {
        name:"CS5260",
        category:"ai",
        mcs:4,
        id:"CS5260"
      }, {
        name:"CS5340",
        category:"ai",
        mcs:4,
        id:"CS5340"
      }, {
        name:"CS5339",
        category:"ai",
        mcs:4,
        id:"CS5339"
      }, { // computer graphics and games
        name:"CS3241",
        category:"graphics",
        mcs:4,
        id:"CS3241"
      }, {
        name:"CS3242",
        category:"graphics",
        mcs:4,
        id:"CS3242"
      }, {
        name:"CS3247",
        category:"graphics",
        mcs:4,
        id:"CS3247"
      }, {
        name:"CS4247",
        category:"graphics",
        mcs:4,
        id:"CS4247"
      }, {
        name:"CS4350",
        category:"graphics",
        mcs:4,
        id:"CS4350"
      }, {
        name:"CS3218",
        category:"graphics",
        mcs:4,
        id:"CS3218"
      }, {
        name:"CS3240",
        category:"graphics",
        mcs:4,
        id:"CS3240"
      }, {
        name:"CS3249",
        category:"graphics",
        mcs:4,
        id:"CS3249"
      }, {
        name:"CS4240",
        category:"graphics",
        mcs:4,
        id:"CS4240"
      }, {
        name:"CS4243",
        category:"graphics",
        mcs:4,
        id:"CS4243p2"
      }, {
        name:"CS4249",
        category:"graphics",
        mcs:4,
        id:"CS4249"
      }, {
        name:"CS4351",
        category:"graphics",
        mcs:4,
        id:"CS4351"
      }, {
        name:"CS5237",
        category:"graphics",
        mcs:4,
        id:"CS5237p2"
      }, {
        name:"CS5240",
        category:"graphics",
        mcs:4,
        id:"CS5240"
      }, {
        name:"CS5343",
        category:"graphics",
        mcs:4,
        id:"CS5343"
      }, {
        name:"CS5346",
        category:"graphics",
        mcs:4,
        id:"CS5346"
      }, { // computer security
        name:"CS2107",
        category:"sec",
        mcs:4,
        id:"CS2107"
      }, {
        name:"CS3235",
        category:"sec",
        mcs:4,
        id:"CS3235"
      }, {
        name:"CS4236",
        category:"sec",
        mcs:4,
        id:"CS4236"
      }, {
        name:"CS4238",
        category:"sec",
        mcs:4,
        id:"CS4238"
      }, {
        name:"CS4239",
        category:"sec",
        mcs:4,
        id:"CS4239p1"
      }, {
        name:"CS3221",
        category:"sec",
        mcs:4,
        id:"CS3221"
      }, {
        name:"CS4257",
        category:"sec",
        mcs:4,
        id:"CS4257p2"
      }, {
        name:"CS4276",
        category:"sec",
        mcs:4,
        id:"CS4276"
      }, {
        name:"CS5231",
        category:"sec",
        mcs:4,
        id:"CS5231"
      }, {
        name:"CS5250",
        category:"sec",
        mcs:4,
        id:"CS5250p1"
      }, {
        name:"CS5321",
        category:"sec",
        mcs:4,
        id:"CS5321p1"
      }, {
        name:"CS5322",
        category:"sec",
        mcs:4,
        id:"CS5322p1"
      }, {
        name:"CS5331",
        category:"sec",
        mcs:4,
        id:"CS5331"
      }, {
        name:"CS5332",
        category:"sec",
        mcs:4,
        id:"CS5332"
      }, {
        name:"IFS4101",
        category:"sec",
        mcs:4,
        id:"IFS4101"
      }, {
        name:"IFS4102",
        category:"sec",
        mcs:4,
        id:"IFS4102"
      }, {
        name:"IFS4103",
        category:"sec",
        mcs:4,
        id:"IFS4103"
      }, { // database systems
        name:"CS2102",
        category:"db",
        mcs:4,
        id:"CS2102"
      }, {
        name:"CS3223",
        category:"db",
        mcs:4,
        id:"CS3223"
      }, {
        name:"CS4221",
        category:"db",
        mcs:4,
        id:"CS4221"
      }, {
        name:"CS4224",
        category:"db",
        mcs:4,
        id:"CS4224"
      }, {
        name:"CS4225",
        category:"db",
        mcs:4,
        id:"CS4225"
      }, {
        name:"CS4220",
        category:"db",
        mcs:4,
        id:"CS4220p2"
      }, {
        name:"CS5226",
        category:"db",
        mcs:4,
        id:"CS5226"
      }, {
        name:"CS5228",
        category:"db",
        mcs:4,
        id:"CS5228p2"
      }, {
        name:"CS5322",
        category:"db",
        mcs:4,
        id:"CS5322p2"
      }, { // multimedia information retrieval
        name:"CS2108",
        category:"ir",
        mcs:4,
        id:"CS2108"
      }, {
        name:"CS3245",
        category:"ir",
        mcs:4,
        id:"CS3245"
      }, {
        name:"CS4242",
        category:"ir",
        mcs:4,
        id:"CS4242"
      }, {
        name:"CS4248",
        category:"ir",
        mcs:4,
        id:"CS4248p2"
      }, {
        name:"CS4347",
        category:"ir",
        mcs:4,
        id:"CS4347"
      }, {
        name:"CS5246",
        category:"ir",
        mcs:4,
        id:"CS5246"
      }, {
        name:"CS5241",
        category:"ir",
        mcs:4,
        id:"CS5241"
      }, { // networking and distributed systems
        name:"CS2105",
        category:"ntwk",
        mcs:4,
        id:"CS2105p2"
      }, {
        name:"CS3103",
        category:"ntwk",
        mcs:4,
        id:"CS3103"
      }, {
        name:"CS4222",
        category:"ntwk",
        mcs:4,
        id:"CS4222"
      }, {
        name:"CS4226",
        category:"ntwk",
        mcs:4,
        id:"CS4226"
      }, {
        name:"CS4231",
        category:"ntwk",
        mcs:4,
        id:"CS4231p2"
      }, {
        name:"CS3237",
        category:"ntwk",
        mcs:4,
        id:"CS3237"
      }, {
        name:"CS4344",
        category:"ntwk",
        mcs:4,
        id:"CS4344"
      }, {
        name:"CS5223",
        category:"ntwk",
        mcs:4,
        id:"CS5223p1"
      }, {
        name:"CS5224",
        category:"ntwk",
        mcs:4,
        id:"CS5224p1"
      }, {
        name:"CS5229",
        category:"ntwk",
        mcs:4,
        id:"CS5229"
      }, {
        name:"CS5248",
        category:"ntwk",
        mcs:4,
        id:"CS5248"
      }, {
        name:"CS5321",
        category:"ntwk",
        mcs:4,
        id:"CS5321p2"
      }, { // parallel computing
        name:"CS3210",
        category:"para",
        mcs:4,
        id:"CS3210"
      }, {
        name:"CS3211",
        category:"para",
        mcs:4,
        id:"CS3211p1"
      }, {
        name:"CS4231",
        category:"para",
        mcs:4,
        id:"CS4231p3"
      }, {
        name:"CS4223",
        category:"para",
        mcs:4,
        id:"CS4223"
      }, {
        name:"CS5222",
        category:"para",
        mcs:4,
        id:"CS5222"
      }, {
        name:"CS5223",
        category:"para",
        mcs:4,
        id:"CS5223p2"
      }, {
        name:"CS5224",
        category:"para",
        mcs:4,
        id:"CS5224p2"
      }, {
        name:"CS5239",
        category:"para",
        mcs:4,
        id:"CS5239"
      }, {
        name:"CS5250",
        category:"para",
        mcs:4,
        id:"CS5250p2"
      }, { // programming languages
        name:"CS2104",
        category:"lang",
        mcs:4,
        id:"CS2104"
      }, {
        name:"CS3211",
        category:"lang",
        mcs:4,
        id:"CS3211p2"
      }, {
        name:"CS4212",
        category:"lang",
        mcs:4,
        id:"CS4212"
      }, {
        name:"CS4215",
        category:"lang",
        mcs:4,
        id:"CS4215"
      }, {
        name:"CS3234",
        category:"lang",
        mcs:4,
        id:"CS3234p1"
      }, {
        name:"CS4216",
        category:"lang",
        mcs:4,
        id:"CS4216"
      }, {
        name:"CS5232",
        category:"lang",
        mcs:4,
        id:"CS5232p1"
      }, {
        name:"CS5214",
        category:"lang",
        mcs:4,
        id:"CS5214"
      }, {
        name:"CS5215",
        category:"lang",
        mcs:4,
        id:"CS5215p2"
      }, {
        name:"CS5218",
        category:"lang",
        mcs:4,
        id:"CS5218"
      }, { // software engineering
        name:"CS2103T",
        category:"se",
        mcs:4,
        id:"CS2103Tp2"
      }, {
        name:"CS3219",
        category:"se",
        mcs:4,
        id:"CS3219"
      }, {
        name:"CS4211",
        category:"se",
        mcs:4,
        id:"CS4211"
      }, {
        name:"CS4218",
        category:"se",
        mcs:4,
        id:"CS4218"
      }, {
        name:"CS4239",
        category:"se",
        mcs:4,
        id:"CS4239p2"
      }, {
        name:"CS3216",
        category:"se",
        mcs:4,
        id:"CS3216p1"
      }, {
        name:"CS3217",
        category:"se",
        mcs:4,
        id:"CS3217p1"
      }, {
        name:"CS3226",
        category:"se",
        mcs:4,
        id:"CS3226"
      }, {
        name:"CS3234",
        category:"se",
        mcs:4,
        id:"CS3234p2"
      }, {
        name:"CS5219",
        category:"se",
        mcs:4,
        id:"CS5219"
      }, {
        name:"CS5232",
        category:"se",
        mcs:4,
        id:"CS5232p2"
      }, {
        name:"CS5272",
        category:"se",
        mcs:4,
        id:"CS5272"
      }, { // other breath and depth
        name:"CS2220",
        category:"othbnd",
        mcs:4,
        id:"CS2220"
      }, {
        name:"CS5233",
        category:"othbnd",
        mcs:4,
        id:"CS5233"
      }, { // team project
        name:"CS3203",
        category:"tp",
        mcs:4,
        id:"CS3203p1"
      }, {
        name:"CS3203",
        category:"tp",
        mcs:4,
        id:"CS3203p2"
      }, {
        name:"CS3216",
        category:"tp",
        mcs:5,
        id:"CS3216p2"
      }, {
        name:"CS3217",
        category:"tp",
        mcs:5,
        id:"CS3217p2"
      }, {
        name:"CS3281",
        category:"tp",
        mcs:4,
        id:"CS3281"
      }, {
        name:"CS3282",
        category:"tp",
        mcs:4,
        id:"CS3282"
      }, {
        name:"CS3283",
        category:"tp",
        mcs:4,
        id:"CS3283"
      }, {
        name:"CS3284",
        category:"tp",
        mcs:4,
        id:"CS3284"
      }, {
        name:"CP3880",
        category:"ier",
        mcs:4,
        id:"CP3880p1"
      }, {
        name:"CP3880",
        category:"ier",
        mcs:4,
        id:"CP3880p2"
      }, {
        name:"CP3880",
        category:"ier",
        mcs:4,
        id:"CP3880p3"
      }, {
        name:"IS4010",
        category:"ier",
        mcs:4,
        id:"IS4010p1"
      }, {
        name:"IS4010",
        category:"ier",
        mcs:4,
        id:"IS4010p2"
      }, {
        name:"IS4010",
        category:"ier",
        mcs:4,
        id:"IS4010p3"
      }, {
        name:"CP3200",
        category:"ier",
        mcs:6,
        id:"CP3200"
      }, {
        name:"CP3202",
        category:"ier",
        mcs:6,
        id:"CP3202"
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
      if (document.getElementById(data) === null || document.getElementById(data).innerHTML === ev.target.outerHTML) {
        // do nothing
      } else {
        ev.target.appendChild(document.getElementById(data));
      }
      var index = -1;
      for (var i = 0; i < this.state.modsImmutable.length; i++) {
        if (this.state.modsImmutable[i].id === data) {
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
      tp: [],
      ier: []
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
          <div key={m.id} className="mod-slot" onDrop={drop} onDragOver={allowDrop}>
            <Module modId={m.id} modCategory={m.category} onModDragHandler={() => this.onModDragHandler(m.name)}>{m.name}</Module>
          </div>
        );
      } else {
        mods[m.category].push(
          <div key={m.id} className="mod-slot" onDrop={drop} onDragOver={allowDrop}>
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
          <p>Industrial Experience Requirement</p>
          <div className="module-collection-grid" id="ier-modules">
            {mods.ier}
          </div>
        </div>

        <div className="module-collection-container">
          <p>Algorithms and Theory</p>
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
          <p>Computer Graphics and Games</p>
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
          <p>Other Breadth and Depth</p>
          <div className="module-collection-grid" id="othbnd-modules">
            {mods.othbnd}
          </div>
        </div>

      </div>
    )
  }
};

export default modCollection;
