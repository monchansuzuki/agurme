import React from "react"
import { useForm } from "react-hook-form"

type Inputs = {
  restaurant: string
  name: string
  reservationDate: Date
  reservationHour: string
  numberPerson: number
  phone: string
  mail: string
  note: string
}

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex-column" style={{ gap: "4px" }}>
        <label>レストラン</label>
        <div>
          <input
            defaultChecked
            {...register("restaurant")}
            value="ChigasaKitchen"
            type="radio"
            name="restaurant"
          />
          ChigasaKitchen AGRUME (チガサキッチン) 駅前店
        </div>
        <div>
          <input
            {...register("restaurant")}
            value="Pizzeria&Osteria"
            type="radio"
            name="restaurant"
          />
          Pizzeria&Osteria AGRUME（ピッツェリア＆オステリア アグルメ）海への店
        </div>
      </div>

      <div className="flex-column" style={{ gap: "4px" }}>
        <label>日付*</label>
        <input
          defaultValue="test"
          {...register("reservationDate", { required: true })}
        />
        {errors.reservationDate && <span>日付が必要</span>}
      </div>

      <div className="flex-column" style={{ gap: "4px" }}>
        <label>時間*</label>
        <input {...register("reservationHour", { required: true })} />
        {<span>This field is required</span>}
      </div>

      <div className="flex-column" style={{ gap: "4px" }}>
        <label>人数*</label>
        <input {...register("numberPerson", { required: true })} />
        {<span>This field is required</span>}
      </div>

      <div className="flex-column" style={{ gap: "4px" }}>
        <input placeholder="名前*" {...register("name", { required: true })} />
        {<span>This field is required</span>}
      </div>

      <div className="flex-column" style={{ gap: "4px" }}>
        <input
          placeholder="電話番号*"
          {...register("phone", { required: true })}
        />
        {<span>This field is required</span>}
      </div>

      <div className="flex-column" style={{ gap: "4px" }}>
        <input
          placeholder="メール*"
          {...register("mail", { required: true })}
        />
        {<span>This field is required</span>}
      </div>

      <div className="flex-column" style={{ gap: "4px" }}>
        <input placeholder="ノート" {...register("note")} />
        {<span>This field is required</span>}
      </div>

      <input className="button" type="submit" value="予約する" />
    </form>
  )
}

export default ReservationForm
