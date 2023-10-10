import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { AppointmentModel } from "../dtos/models/appointment-model";
import { CustomerModel } from "../dtos/models/custumer-model";

@Resolver(() => AppointmentModel)
export class AppointmentsResolver {
  @Query(() => [AppointmentModel])
  async appointments() {
    // aqui retorna os dados da query
    return [{
      startsAt: new Date(),
      endsAt: new Date(),
    }]
  }

  // adicionar database para salvar
  @Mutation(() => AppointmentModel)
  async createAppointment(@Arg("data") data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }

    return appointment
  }

  @FieldResolver(() => CustomerModel)
  async customer(@Root() appointment: AppointmentModel) {
    console.log(appointment)

    return { name: 'Joprelson Leal' }
  }
}